/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Article } from './'
import { User } from '../types/models'

interface IntroProps {
  user: User
}

function Intro({ user }: IntroProps) {
  return (
    <Article header='About Me'>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          src={user.avatarUrl}
          css={{
            margin: 4,
            borderRadius: '50%',
            height: 120
          }}
        />
      </div>

      <div
        css={{
          textAlign: 'center'
        }}
      >
        <p css={{ fontSize: 16 }}>{user.name}</p>
        <p css={{ fontSize: 12 }}>{user.url}</p>
        <p css={{ fontSize: 14 }}>{user.bio}</p>
      </div>
    </Article>
  )
}

export default Intro
