/** @jsx jsx */
import { jsx } from '@emotion/react'

function Header() {
  return (
    <header
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        padding: 8,
        background: '#282c34',
        color: 'white'
      }}
    >
      <p>Michael Markey&apos;s Portfolio</p>
    </header>
  )
}

export default Header
