import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { render } from '@testing-library/react'

import { GET_PROFILE } from '../graphql/queries'
import Main from '../components/Main'
import { act } from 'react-dom/test-utils'

const mockResponse = {
  request: {
    query: GET_PROFILE
  },
  result: {
    data: {
      user: {
        id: '1234',
        avatarUrl: 'http://google.com',
        bio: 'Hey buddy',
        name: 'Michael Markey',
        url: 'https://github.com',
        repositories: {
          nodes: [
            {
              id: '1',
              description: 'my repo',
              name: 'repo #1'
            }
          ]
        }
      }
    }
  }
}

describe('Apollo client', () => {
  it('should render mocked data', async () => {
    const { getByText } = render(
      <MockedProvider mocks={[mockResponse]} addTypename={false}>
        <Main />
      </MockedProvider>
    )

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    // intro
    expect(getByText('Hey buddy')).toBeInTheDocument()
    // repos
    expect(getByText('repo #1')).toBeInTheDocument()
  })
})
