/** @jsx jsx */
import { jsx } from '@emotion/react'

import { Article } from '.'

interface Repo {
  id: string
  description: string
  name: string
}

const data: Repo[] = [
  { id: '1', name: 'repo 1', description: 'cool repo' },
  { id: '2', name: 'repo 2', description: 'cool repo again' }
]

function Repos() {
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
