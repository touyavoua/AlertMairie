
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';  // Importer BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Envelopper votre application avec BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Si vous voulez commencer à mesurer les performances de votre app, passez une fonction
// pour enregistrer les résultats (par exemple: reportWebVitals(console.log))
// ou envoyez-les à un endpoint d'analyse. Apprenez-en plus : https://bit.ly/CRA-vitals
reportWebVitals();

