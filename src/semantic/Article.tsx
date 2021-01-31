/** @jsx jsx */
import { ReactNode } from 'react'
import { jsx } from '@emotion/react'

interface ArticleProps {
  children: ReactNode
  header?: string
}

function Article({ children, header }: ArticleProps) {
  return (
    <article
      css={{
        margin: 16,
        padding: 16,
        borderRadius: 8,
        background: '#fff'
      }}
    >
      {header ? (
        <h2
          css={{
            margin: '0 0 18px',
            fontSize: 22,
            fontWeight: 300
          }}
        >
          {header}
        </h2>
      ) : null}
      {children}
    </article>
  )
}

export default Article
