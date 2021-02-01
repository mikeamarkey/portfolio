import React from 'react'
import { ApolloProvider } from '@apollo/client'

import { client } from './graphql/apollo'
import { Header, Main } from './components'

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Main />
    </ApolloProvider>
  )
}

export default App
