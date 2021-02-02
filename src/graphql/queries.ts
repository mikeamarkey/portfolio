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
        first: 5
        privacy: PUBLIC
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          id
          description
          name
          openGraphImageUrl
          repositoryTopics(first: 6) {
            nodes {
              id
              topic {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`
