import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { render } from '@testing-library/react'

import { GET_PROFILE } from '../graphql/queries'
import Main from '../components/Main'
import { act } from 'react-dom/test-utils'

const successMock = {
  request: {
    query: GET_PROFILE
  },
  result: {
    data: {
      user: {
        id: '1',
        avatarUrl: 'http://myavatarurl.com',
        bio: 'test bio',
        name: 'Michael Markey',
        url: 'https://myurl.com',
        repositories: {
          nodes: [
            {
              id: '2',
              description: 'description text',
              name: 'repo #1',
              openGraphImageUrl: 'open graph image url',
              url: 'repository url',
              repositoryTopics: {
                nodes: [
                  {
                    id: '3',
                    topic: {
                      id: '4',
                      name: 'topic name'
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    }
  }
}

const malformedMock = {
  request: {
    query: GET_PROFILE
  },
  result: {
    data: {
      user: {
        id: '1'
      }
    }
  }
}

describe('Apollo client', () => {
  it('should render mocked data', async () => {
    const { getByText } = render(
      <MockedProvider mocks={[successMock]} addTypename={false}>
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
  })

  it('should fail with malformed response', async () => {
    const { getByText } = render(
      <MockedProvider mocks={[malformedMock]} addTypename={false}>
        <Main />
      </MockedProvider>
    )

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })

    expect(getByText('ERROR!!')).toBeInTheDocument()
  })
})
