/** @jsx jsx */
import { jsx } from '@emotion/react'

import { IRepo } from '../types/models'
import { Article } from './'

interface ReposProps {
  data: IRepo[]
}

function Repos({ data }: ReposProps) {
  return (
    <Article header='My projects'>
      {data.map(({ id, name, description, imageUrl, topics }) => (
        <div
          key={id}
          css={{
            display: 'flex',
            alignItems: 'start',
            marginBottom: 8,
            padding: 12,
            border: '1px solid #131516',
            borderRadius: 4
          }}
        >
          <div
            css={{
              height: 80,
              marginRight: 16
            }}
          >
            <img css={{ maxHeight: '100%' }} src={imageUrl} />
          </div>

          <div
            css={{
              flexDirection: 'column'
            }}
          >
            <p
              css={{
                marginTop: 0,
                fontSize: 18
              }}
            >
              {name}
            </p>
            <p
              css={{
                fontSize: 14
              }}
            >
              {description}
            </p>

            <div css={{ display: 'flex' }}>
              {topics.map(({ id, name }) => (
                <div key={id}>{name}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Article>
  )
}

export default Repos
