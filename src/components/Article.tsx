/** @jsx jsx */
import { ReactNode } from 'react'
import { jsx } from '@emotion/react'

interface ArticleProps {
  children: ReactNode
  header?: string
}

export const articleStyles = {
  margin: 16,
  padding: 16,
  borderRadius: 8,
  boxShadow: '2px 2px 4px rgba(0 0 0 / 10%)',
  background: '#fff'
}

function Article({ children, header }: ArticleProps) {
  return (
    <article css={articleStyles}>
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
