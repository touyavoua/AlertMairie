import React from 'react';
import './service.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function service() {
  return (
    
    
      
        <div className="App">
          {/* Header */}
          <header className="header">
            <div className="logo">
              <h1>AlertMairie Cameroun</h1>
              <h3>Votre plateforme de signalementcitoyenne</h3>
            </div>
            </header>

            <nav className='navigation'> 
              <ul>
                <li><a href="AlertForm.js">Accueil</a></li>
                
                <li><a href="services.js">Services</a></li>
                <li><a href="#signin">Sign In</a></li>
                <li><a href="#signup">Sign Up</a></li>
              </ul>
            </nav>

            {/* Routeurs */}
        <Routes>
          <Route exact path="Alertform.js/" component={() => <div>Accueil</div>} />  {/* Utilisation de Route */}
          <Route path="/service.js" component={() => <div>Services</div>} />  {/* Utilisation de Route */}
        </Routes>
            
            <footer className="footer">
            <p>&copy; 2024 Alert Mairie - Tous droits réservés</p>
            <p>Développé pour les mairies du Cameroun.</p>
          </footer>
        </div>


);
}

export default service;