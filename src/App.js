import React from 'react';
import './App.css';
const axios = require('axios');

window.extAsyncInit = function() {
  // the Messenger Extensions JS SDK is done loading 
  console.log("[ TRADYR ]")
  console.log(window.name)
  window.MessengerExtensions.isInExtension()
};

function App() {
  return (
    <div className="App">
      TRADYR
    </div>
  );
}

export default App;
