import React from 'react';
import ReactDOM from 'react-dom/client';
import RootCmp from './root-cmp.jsx';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './assets/styles/main.scss'

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('beforeinstallprompt event has fired')
  e.prompt()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RootCmp />

)

serviceWorkerRegistration.register();


