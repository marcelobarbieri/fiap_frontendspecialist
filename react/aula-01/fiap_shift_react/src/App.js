import React from 'react';
import { render } from 'react-dom';
import { LoremIpsum } from 'react-lorem-ipsum';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        Hello World!!!
      </h1>
      <div className="text-wrapper">
        <LoremIpsum p={5} />
      </div>
    </div>
  );
}

export default App;