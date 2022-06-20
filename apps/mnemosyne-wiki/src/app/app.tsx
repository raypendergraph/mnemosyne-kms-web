// apps/nx-apollo/src/app/app.tsx
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";
import React, {useState} from 'react';
import './app.module.css';
import {NotationEditor} from '@mnemosyne-wiki/ui-components'
import NotationViewer from "../../../../libs/ui-components/src/lib/notation-viewer/notation-viewer";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache()
});

function App() {
  const [content, setContent] = useState<string|undefined>(undefined)
  const onEditorContentChange = function(evt: string){
    setContent(evt)
  }
  return (<ApolloProvider client={client}>
    <NotationEditor onChange={onEditorContentChange}/>
    <NotationViewer notationContent={content} />
  </ApolloProvider>)
}

export default App;
