import { request, gql } from 'graphql-request'

const query = gql`
{
    ammo(lang: en, limit: 10, filter: {
      initialSpeed: [922]
      
    }) {
      initialSpeed
    }
}
`

request('https://api.tarkov.dev/graphql', query).then((data) => console.log(data))
