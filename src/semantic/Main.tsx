/** @jsx jsx */
import { jsx } from '@emotion/react'

import { Intro, Repos, Starred } from '../components'

function Main() {
  return (
    <main
      css={{
        background: '#f5f5f5'
      }}
    >
      <section
        css={{
          display: 'flex',
          flexDirection: 'column',
          margin: '48px auto',
          maxWidth: 600
        }}
      >
        <Intro />
        <Repos />
        <Starred />
      </section>
    </main>
  )
}

export default Main
