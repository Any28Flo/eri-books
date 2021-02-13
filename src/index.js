import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebaseConfig from './firebase-config.js';
import { FirebaseAppProvider } from 'reactfire';
import Spinner from './components/utils/Spiner/Spinner'

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>

  <Suspense fallback={ <Spinner/>   }>
    <App />

  </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
