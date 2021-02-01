import { gql } from '@apollo/client'

export const GET_PROFILE = gql`
  query ProfileQuery {
    user(login: "mikeamarkey") {
      id
      avatarUrl
      bio
      name
      url
    }
  }
`
