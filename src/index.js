import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.css"
import "./i18n"
import { Analytics } from "@vercel/analytics/react"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Analytics />
    <App />
  </React.StrictMode>
);

// Passa a função reportWebVitals para medir o desempenho
reportWebVitals();
