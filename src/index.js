import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import counter from './add_minus; // This is the file we just created.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
