import React from 'react';
import { render } from 'react-dom';
import { LoremIpsum } from 'react-lorem-ipsum';

import './App.css';

function App() {

  let rand = (Math.random() * 10).toFixed(0);

  return (
    <div className="App">
      <h1>
        Hello World {rand}!!!
      </h1>
      <div className="text-wrapper">
        <LoremIpsum p={rand} />
      </div>
    </div>
  );
}

export default App;