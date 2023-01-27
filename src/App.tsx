import React from 'react';
import { ApplicationBar } from './components';
import PageRouter from './routing/router';

function App() {
  return (
    <React.Fragment>
      <ApplicationBar />
      <PageRouter />
    </React.Fragment>)
}

export default App;
