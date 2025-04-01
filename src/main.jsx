import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './cursor.css'; // remove if not using the glowing cursor

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
