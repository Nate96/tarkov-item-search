export class Schema {
  queryType: QueryType;
  mutationType: MutationType;
  subscriptionType: SubscriptionType;
  types: Type[];
  directives: Directive[];
}

export class QueryType {
  name: string;
}

export class MutationType {
  name: string;
}

export class SubscriptionType {
  name: string;
}

export class Directive {
  name: string;
  description: string;
  isRepeatable: boolean;
  locations: string[];
  args: InputValue[];
}

export class Type {
  kind: string;
  name: string;
  description: string;
  fields: Field[];
  inputFields: InputValue[];
  interfaces: Type[];
  enumValues: EnumValue[];
  possibleTypes: Type[];
  ofType: Type;
}

export class Field {
  name: string;
  description: string;
  args: InputValue[];
  type: Type;
  isDeprecated: boolean;
  deprecationReason: string;
}

export class InputValue {
  name: string;
  description: string;
  type: Type;
  defaultValue: string;
  isDeprecated: boolean;
  deprecationReason: string;
}

export class EnumValue {
  name: string;
  description: string;
  isDeprecated: boolean;
  deprecationReason: string;
}