import { gql } from '@apollo/client'

export const GET_PROFILE = gql`
  query ProfileQuery {
    user(login: "mikeamarkey") {
      id
      avatarUrl
      bio
      name
      url
      pinnedItems(first: 6) {
        nodes {
          ... on Repository {
            id
            description
            name
            openGraphImageUrl
            url
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
      starredRepositories(
        first: 4
        orderBy: { field: STARRED_AT, direction: DESC }
      ) {
        nodes {
          id
          description
          name
          url
        }
      }
      following(first: 10) {
        nodes {
          id
          avatarUrl
          url
        }
      }
    }
  }
`
