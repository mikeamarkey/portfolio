/** @jsx jsx */
import { jsx } from '@emotion/react'

import { IRepo } from '../types/models'
import { Article, Topic } from './'

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
            marginBottom: 24,
            padding: '24px 12px',
            boxShadow: '0px 0px 4px 1px rgb(0 0 0 / 10%)',
            borderRadius: 4
          }}
        >
          <div
            css={{
              marginRight: 16,
              width: 160,
              flex: 1
            }}
          >
            <img css={{ maxWidth: '100%' }} src={imageUrl} />
          </div>

          <div
            css={{
              flex: 2
            }}
          >
            <h3
              css={{
                marginTop: 0,
                fontSize: 18,
                fontWeight: 400
              }}
            >
              {name}
            </h3>
            <p
              css={{
                fontSize: 14
              }}
            >
              {description}
            </p>

            <div css={{ display: 'flex', flexWrap: 'wrap' }}>
              {topics.map(({ id, name }) => (
                <Topic key={id} name={name} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </Article>
  )
}

export default Repos
