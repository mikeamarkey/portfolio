/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useQuery } from '@apollo/client'

import { GET_PROFILE } from '../graphql/queries'
import { createProfileData } from '../graphql/helpers'
import { ProfileResponse } from '../types/api'
import { Intro, Following, MainSkeleton, Repos, Starred } from './'

export const mainStyles = {
  background: '#f5f5f5'
}

export const sectionStyles = {
  margin: '48px auto',
  maxWidth: 800
}

function Main() {
  const { loading, error, data } = useQuery<ProfileResponse>(GET_PROFILE)

  if (loading) {
    return <MainSkeleton />
  }

  if (error || !data) {
    return <div>ERROR!!</div>
  }

  const { intro, repos, starred, following } = createProfileData(data)
  return (
    <main css={mainStyles}>
      <section css={sectionStyles}>
        <Intro data={intro} />
        <Repos data={repos} />
        <Starred data={starred} />
        <Following data={following} />
      </section>
    </main>
  )
}

export default Main
