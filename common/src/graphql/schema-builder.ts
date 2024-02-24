import { Field, InputValue, Schema, Type } from "./schema-types.js";
import chalk from "chalk";

type QueryArgs = { [key: string]: string | number | boolean };

export class SchemaBuilder {
  schema: Schema;
  schemaTypesMap: Map<string, Type>;
  queryFieldsMap: Map<string, Field>;

  constructor(schema: Schema) {
    this.schema = schema;
    this.createSchemaTypesMap(schema);
    this.createQueryFieldsMap();
  }

  private createSchemaTypesMap(schema: Schema) {
    this.schemaTypesMap = new Map();
    for (const type of schema.types) {
      this.schemaTypesMap.set(type.name, type);
    }
  }

  private createQueryFieldsMap() {
    this.queryFieldsMap = new Map();
    for (const field of this.queryType?.fields || []) {
      this.queryFieldsMap.set(field.name, field);
    }
  }

  get queryType(): Type | undefined {
    return this.schemaTypesMap.get(this.schema.queryType.name);
  }

  buildQuery(queryName: string, queryArgs: QueryArgs = {}): string {
    // validate queryName
    const queryField: Field | undefined = this.queryFieldsMap.get(queryName);
    if (!queryField) {
      throw new Error(`Query ${queryName} does not exist in schema`);
    }

    // get the return type of query from schema
    const returnType: Type | undefined = this.getFieldType(queryField.type);
    if (!returnType) {
      throw new Error(`Query ${queryName} has no return type`);
    }

    if (!returnType.name) {
      throw new Error(`Query ${queryName} has no return type name`);
    }

    // build query
    const header = this.buildHeader(queryField, queryArgs);
    const selectionSet = this.buildSelectionSet(returnType.name, 1);

    if (!header) {
      throw new Error(`Query ${queryName} header is invalid`);
    }

    if (!selectionSet) {
      throw new Error(`Query ${queryName} selectionSet is invalid`);
    }

    return `query {
      ${header} {
        ${selectionSet}
      }
    }`;
  }

  buildHeader(queryField: Field, queryArgs: QueryArgs = {}): string {
    let header = queryField.name;
    if (queryArgs === undefined || queryArgs === null) {
      console.log('Query arguments are invalid');
      return header;
    }

    const queryKeys = Object.keys(queryArgs);
    if (queryKeys.length > 0) {
      header += '(';
      for (let i = 0; i < queryKeys.length; i++) {
        const key: string | undefined = queryKeys[i];
        if (!key) {
          console.log('Query argument key is invalid');
          continue;
        }

        // verify key exists in queryField.args
        const queryFieldArg: InputValue | undefined = queryField.args.find(arg => arg.name === key);
        if (!queryFieldArg) {
          console.log(`Query argument ${key} does not exist in query ${queryField.name}`);
          continue;
        }

        const value: string | number | boolean | undefined = queryArgs[key];
        // TODO: verify value type is valid based on nested arg.types

        header += `${key}: ${value?.toString()}`;
        if (i < queryKeys.length - 1) {
          header += ' ';
        }
      }
      header += ')';
    }
    return header;
  }

  private buildSelectionSet(typeName: string, depth: number): string {
    // Example of a selection set:
    // 
    //   Field 1
    //   Field 2
    //   Field 3 (UnionType) {
    //     ... on UnionType1 {
    //       Field 4
    //       Field 5
    //       Field 6
    //     }
    //     ... on UnionType2 {
    //       Field 4
    //       Field 5
    //       Field 7 (Note: UnionType2 has different fields than UnionType1)
    //     }
    //   }
    //   Field 8 (InterfaceType) {
    //     Common Field 9
    //     Common Field 10
    //     ... on InterfaceType1 {
    //       Specific Field 11
    //       Specific Field 12
    //     }
    //     ... on InterfaceType2 {
    //       Specific Field 13
    //       Specific Field 14
    //     }
    //   }

    // determine if typeName is a field, interface, or union
    const type: Type | undefined = this.schemaTypesMap.get(typeName);
    if (!type) {
      throw new Error(`Type ${typeName} does not exist in schema`);
    }

    console.log(`Building selection set for type ${chalk.green.bold(typeName)}`)

    if (type.fields && type.fields.length > 0) {
      return this.buildFieldSelectionSet(type.fields, depth);
    }

    if (type.interfaces && type.interfaces.length > 0) {
      return this.buildInterfaceSelectionSet(type.interfaces, depth);
    }

    if (type.possibleTypes && type.possibleTypes.length > 0) {
      return this.buildUnionSelectionSet(type.possibleTypes, depth);
    }

    throw new Error(`Type ${typeName} has no fields, interfaces, or possibleTypes`);
  }

  private buildFieldSelectionSet(fields: Field[], depth: number): string {
    let selectionSet = '';
    for (let i = 0; i < fields.length; i++) {
      const field: Field | undefined = fields[i];
      if (!field) {
        console.log('Field is invalid');
        continue;
      }
      
      if (field.isDeprecated) {
        console.log(chalk.bold.yellow(`Field ${chalk.underline(field.name)} is deprecated: ${chalk.bold(field.deprecationReason)}`));
        continue;
      }
      
      const fieldType = this.getFieldType(field.type);
      if (!fieldType) {
        console.log('Field type is invalid');
        continue;
      }

      const kind = fieldType?.kind;
      if (kind === 'OBJECT' || kind === 'INTERFACE' || kind === 'UNION') {
        if (depth >= 2) {
          continue;
        }

        const innerSelectionSet = this.buildSelectionSet(fieldType.name, depth + 1);
        if (!innerSelectionSet) {
          continue;
        }

        selectionSet += `${field.name} {
          ${innerSelectionSet}
        }`;
      }

      if (kind === 'SCALAR' || kind === 'ENUM') {
        selectionSet += field.name;
      }

      if (i < fields.length - 1) {
        selectionSet += '\n';
      }
    }
    return selectionSet;
  }

  private buildInterfaceSelectionSet(interfaces: Type[], depth: number): string {
    let selectionSet = '';
    for (let i = 0; i < interfaces.length; i++) {
      const iface: Type | undefined = interfaces[i];
      if (!iface) {
        console.log('Interface is invalid');
        continue;
      }

      const innerSelectionSet = this.buildSelectionSet(iface.name, depth);
      if (!innerSelectionSet) {
        continue;
      }

      selectionSet += innerSelectionSet;
      if (i < interfaces.length - 1) {
        selectionSet += '\n';
      }
    }
    return selectionSet;
  }

  private buildUnionSelectionSet(unions: Type[], depth: number): string {
    let selectionSet = '';
    for (let i = 0; i < unions.length; i++) {
      const union: Type | undefined = unions[i];
      if (!union) {
        console.log('Union is invalid');
        continue;
      }

      const innerSelectionSet = this.buildSelectionSet(union.name, depth);
      if (!innerSelectionSet) {
        continue;
      }

      selectionSet += `... on ${union.name} {
        ${innerSelectionSet}
      }`;
      if (i < unions.length - 1) {
        selectionSet += '\n';
      }
    }
    return selectionSet;
  }

  private getFieldType(type: Type): Type | undefined {
    if (type.kind === 'NON_NULL' || type.kind === 'LIST') {
      return this.getFieldType(type.ofType);
    }

    return type;
  }
}