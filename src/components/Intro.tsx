/** @jsx jsx */
import { jsx } from '@emotion/react'
import Article from '../semantic/Article'

const data = {
  avatarUrl: 'https://avatars.githubusercontent.com/u/8324973?s=120',
  name: 'Michael Markey',
  url: 'github.com/mikeamarkey',
  bio: 'developer at bivalabo. in japan since 2007, originally from the US.'
}

function Intro() {
  return (
    <Article>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          src={data.avatarUrl}
          css={{
            borderRadius: '50%'
          }}
        />
      </div>

      <div
        css={{
          textAlign: 'center'
        }}
      >
        <p css={{ fontSize: 16 }}>{data.name}</p>
        <p css={{ fontSize: 12 }}>{data.url}</p>
        <p css={{ fontSize: 14 }}>{data.bio}</p>
      </div>
    </Article>
  )
}

export default Intro
