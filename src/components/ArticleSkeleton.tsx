/** @jsx jsx */
import { jsx } from '@emotion/react'

import { articleStyles } from './Article'

interface ArticleSkeletonProps {
  height?: number
}

function ArticleSkeleton({ height = 160 }: ArticleSkeletonProps) {
  return (
    <article
      css={{
        ...articleStyles,
        height
      }}
    ></article>
  )
}

export default ArticleSkeleton
