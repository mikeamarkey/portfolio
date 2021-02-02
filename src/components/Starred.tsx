/** @jsx jsx */
import { jsx } from '@emotion/react'

import { IRepo } from '../types/models'
import { Article, Link } from './'

interface StarredProps {
  data: IRepo[]
}

function Starred({ data }: StarredProps) {
  return (
    <Article header="Some things I'm interested in">
      {data.map(({ id, url, name, description }) => (
        <Link key={id} href={url} target='_blank'>
          <div
            css={{
              marginBottom: 12,
              padding: '12px 12px',
              boxShadow: '0px 0px 4px 1px rgb(0 0 0 / 10%)',
              borderRadius: 4,
              cursor: 'pointer'
            }}
          >
            <h3 css={{ marginTop: 0, fontSize: 18, fontWeight: 400 }}>
              {name}
            </h3>
            <p css={{ fontSize: 12 }}>{url}</p>
            <p css={{ fontSize: 14, margin: '8px 0 0' }}>{description}</p>
          </div>
        </Link>
      ))}
    </Article>
  )
}

export default Starred
