/** @jsx jsx */
import { AnchorHTMLAttributes } from 'react'
import { jsx } from '@emotion/react'

const linkStyles = {
  color: 'inherit',
  textDecoration: 'none'
}

function Link({
  children,
  ...restProps
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a css={linkStyles} {...restProps}>
      {children}
    </a>
  )
}

export default Link
