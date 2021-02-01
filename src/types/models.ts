export interface ProfileResponse {
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
      }[]
    }
  }
}

export interface Intro {
  avatarUrl: string
  bio: string
  name: string
  url: string
}

export interface Repo {
  id: string
  description: string
  name: string
}

export interface ProfileData {
  intro: Intro | null
  repos: Repo[]
}
