import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from 'firebase/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: "AIzaSyAJAs6tNK4FHAEg4zzgZxe5fq2_W7Jy0Fo",
  authDomain: "github-user-saver-fd198.firebaseapp.com",
  projectId: "github-user-saver-fd198",
  storageBucket: "github-user-saver-fd198.appspot.com",
  messagingSenderId: "864174371592",
  appId: "1:864174371592:web:aed9687e4872e139d3b2bd"
};

initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
