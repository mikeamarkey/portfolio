/** @jsx jsx */
import { jsx } from '@emotion/react'

function Header() {
  return (
    <header
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '40px',
        padding: '8px',
        background: '#282c34',
        color: 'white'
      }}
    >
      <p>Michael Markey&apos;s Portfolio</p>
    </header>
  )
}

export default Header
