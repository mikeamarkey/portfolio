export interface IProfileData {
  intro: IIntro
  repos: IRepo[]
  starred: IRepo[]
  following: IFollowing[]
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
  url: string
  imageUrl?: string
  topics?: ITopic[]
}

export interface IFollowing {
  id: string
  avatarUrl: string
  url: string
}
