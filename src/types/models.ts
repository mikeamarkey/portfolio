export interface IProfileResponse {
  user: {
    id: string
    avatarUrl: string
    bio: string
    name: string
    url: string
    repositories: {
      nodes: {
        id: string
        description: string
        name: string
        openGraphImageUrl: string
        repositoryTopics: {
          nodes: {
            id: string
            topic: {
              id: string
              name: string
            }
          }[]
        }
      }[]
    }
  }
}

export interface IProfileData {
  intro: IIntro | null
  repos: IRepo[]
}

export interface IIntro {
  avatarUrl: string
  bio: string
  name: string
  url: string
}

export interface ITopic {
  id: string
  name: string
}

export interface IRepo {
  id: string
  description: string
  name: string
  imageUrl: string
  topics: ITopic[]
}
