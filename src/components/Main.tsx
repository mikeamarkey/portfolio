/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useQuery } from '@apollo/client'

import { GET_PROFILE } from '../graphql/queries'
import { createProfileData } from '../graphql/helpers'
import { IProfileResponse } from '../types/models'
import { Intro, Repos, Starred } from './'

function Main() {
  const { loading, error, data } = useQuery<IProfileResponse>(GET_PROFILE)
  if (loading) {
    return <div>loading...</div>
  }

  if (error || !data) {
    return <div>ERROR!!</div>
  }

  const profileData = createProfileData(data)
  if (!profileData || !profileData.intro) {
    return <div>REQUEST ERROR!</div>
  }

  return (
    <main
      css={{
        background: '#f5f5f5'
      }}
    >
      <section
        css={{
          display: 'flex',
          flexDirection: 'column',
          margin: '48px auto',
          maxWidth: 600
        }}
      >
        <Intro data={profileData.intro} />
        <Repos data={profileData.repos} />
        <Starred />
      </section>
    </main>
  )
}

export default Main
