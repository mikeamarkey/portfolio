/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useQuery } from '@apollo/client'

import { User } from '../types/models'
import { GET_PROFILE } from '../graphql/queries'
import { Intro, Repos, Starred } from './'

interface ProfileResponse {
  user: User
}

function Main() {
  const { loading, error, data } = useQuery<ProfileResponse>(GET_PROFILE)
  if (loading) {
    return <div>loading...</div>
  }

  if (error || !data) {
    return <div>ERROR!!</div>
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
        <Intro user={data.user} />
        <Repos />
        <Starred />
      </section>
    </main>
  )
}

export default Main
