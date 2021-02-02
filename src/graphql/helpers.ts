import { IProfileData } from '../types/models'
import { IProfileResponse } from '../types/api'

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
        url,
        openGraphImageUrl: imageUrl,
        repositoryTopics
      } = repo
      return {
        id,
        name,
        description,
        imageUrl,
        url,
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
