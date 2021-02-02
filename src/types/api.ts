export interface ProfileResponse {
  user: {
    id: string
    avatarUrl: string
    bio: string
    name: string
    url: string
    repositories: RepositoryResponse
  }
}

export interface RepositoryResponse {
  nodes: {
    id: string
    description: string
    name: string
    url: string
    openGraphImageUrl: string
    repositoryTopics: RepositoryTopicsResponse
  }[]
}

export interface RepositoryTopicsResponse {
  nodes: {
    id: string
    topic: {
      id: string
      name: string
    }
  }[]
}
