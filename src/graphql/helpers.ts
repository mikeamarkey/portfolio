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
    repos: repositories.nodes
  }

  return profileData
}
