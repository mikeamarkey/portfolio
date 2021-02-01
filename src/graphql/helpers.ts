import { ProfileResponse, ProfileData } from '../types/models'

export function createProfileData(
  response: ProfileResponse
): ProfileData | null {
  if (!response) {
    return null
  }

  const { user } = response
  const { avatarUrl, bio, name, url, repositories } = user
  console.log(repositories)

  const profileData: ProfileData = {
    intro: { avatarUrl, bio, name, url },
    repos: repositories.nodes
  }

  return profileData
}
