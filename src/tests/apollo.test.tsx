import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import { error, success } from './mocks'
import Main from '../components/Main'

describe('Apollo client', () => {
  it('should render mocked data', async () => {
    const { getByText, getByAltText } = render(
      <MockedProvider mocks={[success]} addTypename={false}>
        <Main />
      </MockedProvider>
    )

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })

    // intro
    expect(getByText('test bio')).toBeInTheDocument()
    // repos
    expect(getByText('repo #1')).toBeInTheDocument()
    // topics
    expect(getByText('topic name')).toBeInTheDocument()
    // starred
    expect(getByText('starred repo #1')).toBeInTheDocument()
    // following
    expect(getByAltText('https://github.com/following')).toBeInTheDocument()
  })

  it('should fail with malformed response', async () => {
    const { getByText } = render(
      <MockedProvider mocks={[error]} addTypename={false}>
        <Main />
      </MockedProvider>
    )

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })

    expect(getByText('ERROR!!')).toBeInTheDocument()
  })
})
