import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('should render without problems', () => {
    const { getByText } = render(<App />)
    expect(getByText("Michael Markey's Portfolio")).toBeInTheDocument()
  })
})
