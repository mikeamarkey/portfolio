export interface ProfileResponse {
  user: {
    id: string
    avatarUrl: string
    bio: string
    name: string
    url: string
    pinnedItems: RepositoryResponse
    starredRepositories: StarredResponse
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

export interface StarredResponse {
  nodes: {
    id: string
    description: string
    name: string
    url: string
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
