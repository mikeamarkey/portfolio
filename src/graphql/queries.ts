import { gql } from '@apollo/client'

export const GET_PROFILE = gql`
  query ProfileQuery {
    user(login: "mikeamarkey") {
      id
      avatarUrl
      bio
      name
      url
      repositories(
        first: 6
        privacy: PUBLIC
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          id
          description
          name
        }
      }
    }
  }
`
