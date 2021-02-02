/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Article, Link } from './'
import { IIntro } from '../types/models'

interface IntroProps {
  data: IIntro
}

function Intro({ data: { avatarUrl, name, url, bio } }: IntroProps) {
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
          alt={name}
          src={avatarUrl}
          css={{
            margin: 4,
            borderRadius: '50%',
            height: 120
          }}
        />
      </div>

      <div css={{ textAlign: 'center' }}>
        <p css={{ fontSize: 16 }}>{name}</p>
        <Link href={url} target='_blank'>
          <p css={{ fontSize: 12 }}>{url}</p>
        </Link>
        <p css={{ fontSize: 14 }}>{bio}</p>
      </div>
    </Article>
  )
}

export default Intro
