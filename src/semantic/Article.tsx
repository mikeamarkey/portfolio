/** @jsx jsx */
import { ReactNode } from 'react'
import { jsx } from '@emotion/react'

interface ArticleProps {
  children: ReactNode
}

function Article({ children }: ArticleProps) {
  return (
    <article
      css={{
        margin: 16,
        padding: 16,
        borderRadius: 8,
        background: '#fff'
      }}
    >
      {children}
    </article>
  )
}

export default Article
