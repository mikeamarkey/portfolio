/** @jsx jsx */
import { jsx } from '@emotion/react'

import { ArticleSkeleton } from './'
import { mainStyles, sectionStyles } from './Main'

function MainSkeleton() {
  return (
    <main css={mainStyles}>
      <section css={sectionStyles}>
        <ArticleSkeleton height={280} />
        <ArticleSkeleton height={1000} />
      </section>
    </main>
  )
}

export default MainSkeleton
