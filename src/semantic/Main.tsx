/** @jsx jsx */
import { jsx } from '@emotion/react'

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
          maxWidth: '600px'
        }}
      >
        This is the main content!
      </section>
    </main>
  )
}

export default Main
