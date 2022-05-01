// apps/nx-apollo/src/app/app.tsx

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import React from 'react';
import './app.css';
import {NotationEditor} from '@mnemosyne-wiki/ui-components'

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <NotationEditor />
  </ApolloProvider>
);

export default App;
