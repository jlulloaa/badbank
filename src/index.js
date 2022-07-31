import React from 'react';
import ReactDOM from 'react-dom/client';
// Add bootstrap theme SpaceLab from bootswatch:
import "bootswatch/dist/spacelab/bootstrap.min.css";
// By adding a bootswatch theme, I don't need to add the other bootstrap headers (at least for now...):
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// Put any other imports below so that CSS from your components takes precedence over default styles.
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

// When using React ≥v6, BroswerRouter replaces React.StrictMode to make the router feature accessible from any part of the SPA
// See this thread for more details: https://www.freecodecamp.org/news/how-to-use-react-router-version-6/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // For some (unknown) reason, StrictMode calls twice the functions when clicking once in the links. Specifically, when clicking "Products" we add an element to the array "users", but when using StrictMode, every click adds two elements
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
