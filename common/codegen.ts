import type { CodegenConfig } from '@graphql-codegen/cli'
// import { TypeScriptPluginConfig } from '@graphql-codegen/typescript'
// import { TypeScriptDocumentsPluginConfig } from '@graphql-codegen/typescript-operations'
// import { TypeScriptResolversPluginConfig } from '@graphql-codegen/typescript-resolvers'

const schema = 'https://api.tarkov.dev/graphql';
const outputFile = 'src/graphql/introspection.json';

// const customConfig: TypeScriptPluginConfig | TypeScriptDocumentsPluginConfig | TypeScriptResolversPluginConfig = {
//   declarationKind: {
//     interface: 'interface',
//     type: 'class',
//   },
//   avoidOptionals: {
//     field: true,
//     inputValue: true,
//     object: true,
//     defaultValue: true
//   }
// }

const customConfig = {

}

const config: CodegenConfig = {
  overwrite: false,
  schema: schema,
  generates: {
    [outputFile]: {
      plugins: [
        'introspection',
      ],
      config: customConfig
    }
  }
}



export default config;