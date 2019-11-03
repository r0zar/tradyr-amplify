import React from 'react';

window.extAsyncInit = function() {
  // the Messenger Extensions JS SDK is done loading 
  console.log("[ TRADYR ]")
  console.log(window.name)
  window.MessengerExtensions.isInExtension()
};

export default function App() {

  return (
    <React.Fragment></React.Fragment>
  );
}