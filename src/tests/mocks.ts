import { GET_PROFILE } from '../graphql/queries'

export const error = {
  request: {
    query: GET_PROFILE
  },
  result: {
    data: {
      user: {
        id: '1'
      }
    }
  }
}

export const success = {
  request: {
    query: GET_PROFILE
  },
  result: {
    data: {
      user: {
        id: '1',
        avatarUrl: 'http://myavatarurl.com',
        bio: 'test bio',
        name: 'Michael Markey',
        url: 'https://myurl.com',
        repositories: {
          nodes: [
            {
              id: '2',
              description: 'description text',
              name: 'repo #1',
              openGraphImageUrl: 'open graph image url',
              url: 'repository url',
              repositoryTopics: {
                nodes: [
                  {
                    id: '3',
                    topic: {
                      id: '4',
                      name: 'topic name'
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    }
  }
}
