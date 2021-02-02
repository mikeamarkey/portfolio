import { IProfileData, IProfileResponse } from '../types/models'

export function createProfileData(
  response: IProfileResponse
): IProfileData | null {
  if (!response) {
    return null
  }

  const { user } = response
  const { avatarUrl, bio, name, url, repositories } = user

  const profileData = {
    intro: { avatarUrl, bio, name, url },
    repos: repositories.nodes.map((repo) => {
      const {
        id,
        name,
        description,
        openGraphImageUrl: imageUrl,
        repositoryTopics
      } = repo
      return {
        id,
        name,
        description,
        imageUrl,
        topics: repositoryTopics.nodes.map((node) => {
          return {
            id: node.topic.id,
            name: node.topic.name
          }
        })
      }
    })
  }

  return profileData
}
