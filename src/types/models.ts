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
  url: string
  imageUrl: string
  topics: ITopic[]
}
