import React from 'react';
import './App.css';

import Response from './components/Response';

function App() {
  return (
    <div className="App">
      <div>
      <h1>You have a question? I've got an answer.</h1>
      <Response />
      </div>
    </div>
  );
};

export default App;
