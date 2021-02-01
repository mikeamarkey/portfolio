/** @jsx jsx */
import { jsx } from '@emotion/react'

import { Repo } from '../types/models'
import { Article } from './'

interface ReposProps {
  data: Repo[]
}

function Repos({ data }: ReposProps) {
  return (
    <Article header='My projects'>
      {data.map(({ id, name, description }) => (
        <div
          key={id}
          css={{
            marginBottom: 8,
            padding: 8,
            border: '1px solid #131516',
            borderRadius: 4
          }}
        >
          <p
            css={{
              fontSize: 16
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
        </div>
      ))}
    </Article>
  )
}

export default Repos
