/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Article, Link } from './'
import { IIntro } from '../types/models'

interface IntroProps {
  data: IIntro
}

function Intro({ data }: IntroProps) {
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
          src={data.avatarUrl}
          css={{
            margin: 4,
            borderRadius: '50%',
            height: 120
          }}
        />
      </div>

      <div css={{ textAlign: 'center' }}>
        <p css={{ fontSize: 16 }}>{data.name}</p>
        <Link href={data.url} target='_blank'>
          <p css={{ fontSize: 12 }}>{data.url}</p>
        </Link>
        <p css={{ fontSize: 14 }}>{data.bio}</p>
      </div>
    </Article>
  )
}

export default Intro
