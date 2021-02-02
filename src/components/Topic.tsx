/** @jsx jsx */
import { jsx } from '@emotion/react'

interface TopicProps {
  name: string
}

function Topic({ name }: TopicProps) {
  return (
    <div
      css={{
        margin: 4,
        fontSize: 12,
        color: 'white',
        padding: '4px 8px',
        borderRadius: 4,
        background: '#282c34',
        boxShadow: '1px 1px 1px rgba(0 0 0 / 10%)'
      }}
    >
      {name}
    </div>
  )
}

export default Topic
