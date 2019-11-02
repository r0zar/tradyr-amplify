import React from 'react';
import './App.css';
const axios = require('axios');

window.extAsyncInit = function() {
  // the Messenger Extensions JS SDK is done loading 
  console.log("YOYOYO")
  console.log(window.name)
  window.MessengerExtensions.isInExtension()

  let body = {
    "home_url" : {
       "url": "https://master.d3hb5qt22e5qrr.amplifyapp.com/",
       "webview_height_ratio": "tall",
       "webview_share_button": "show",
    }
  }
  axios.post('https://graph.facebook.com/v5.0/me/messenger_profile?access_token=EAALUbvTt01cBAGs0BIPiE7kLF6xPJMyUcZBwwmKkxQTb5bucHROGe5l4ZChwsibEOhNQr4ezbTiRtOWNNdm0wxzFgWKGH0iM0BVmLMHP7Ei7XuK9VDZAfqNgXs1tExPZCNnYkdNnvTe5cBSE2E4h28POv6v3vYXXdu0Hkd5TkAZDZD', body)

};

function App() {
  return (
    <div className="App">
      test
    </div>
  );
}

export default App;
