import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';  // Make sure this path matches your App component
import './index.css';  // Optional, for global styles



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
