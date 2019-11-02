import React from 'react';
import './App.css';

window.extAsyncInit = function() {
  // the Messenger Extensions JS SDK is done loading 
  console.log("[ TRADYR ]")
  console.log(window.name)
  window.MessengerExtensions.isInExtension()
};

function App() {
  return (
    <div>
      TRADYR
    </div>
  );
}

export default App;
