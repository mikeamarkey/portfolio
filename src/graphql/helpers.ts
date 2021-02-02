import { IProfileData } from '../types/models'
import { ProfileResponse } from '../types/api'

export function createProfileData(response: ProfileResponse): IProfileData {
  const { user } = response
  const { avatarUrl, bio, name, url, pinnedItems, starredRepositories } = user

  const profileData = {
    intro: { avatarUrl, bio, name, url },
    starred: starredRepositories.nodes,
    repos: pinnedItems.nodes.map((repo) => {
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
