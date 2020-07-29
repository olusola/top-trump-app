import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import 'bootstrap/dist/css/bootstrap.css'

import * as serviceWorker from './serviceWorker'
import App from './App'
import HistoryContainer from './containers/History/HistoryContainer'

const client = new ApolloClient({
  uri: 'https://swapi.graph.cool/',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
      <React.StrictMode>
        <Router>
          <Route path="/" component={App} exact/>
          <Route path="/history" component={HistoryContainer} exact/>
        </Router>
      </React.StrictMode>
    </ApolloProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
