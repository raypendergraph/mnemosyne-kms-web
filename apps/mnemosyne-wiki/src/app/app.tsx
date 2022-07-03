// apps/nx-apollo/src/app/app.tsx
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";
import React from 'react';
import './app.module.css';
import NotationEditPage from "../pages/notation-edit/notation-edit";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (<ApolloProvider client={client}>
    <NotationEditPage></NotationEditPage>
  </ApolloProvider>)
}

export default App;
