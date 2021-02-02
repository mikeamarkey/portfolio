/** @jsx jsx */
import { jsx } from '@emotion/react'

import { IFollowing } from '../types/models'
import { Article, Link } from './'

interface FollowingProps {
  data: IFollowing[]
}

function Following({ data }: FollowingProps) {
  return (
    <Article header='Some people that inspire me'>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'wrap'
        }}
      >
        {data.map(({ id, avatarUrl, url }) => (
          <Link key={id} href={url} target='_blank'>
            <img
              alt={url}
              src={avatarUrl}
              css={{
                margin: 4,
                borderRadius: '50%',
                height: 60
              }}
            />
          </Link>
        ))}
      </div>
    </Article>
  )
}

export default Following
