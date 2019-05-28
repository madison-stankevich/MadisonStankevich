import React from 'react';
import './App.css';

import AppContainer from './Containers/AppContainer';
import ContactBar from './Containers/ContactBar';


function App() {
  return (
    <div className="app">
      <ContactBar />
      <AppContainer />
    </div>
  );
}

export default App;
