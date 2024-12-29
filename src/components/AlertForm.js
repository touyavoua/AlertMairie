import React from 'react';
import './AlertForm.css';

function AlertForm() {
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
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#produits">Produits</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#signin">Sign In</a></li>
                <li><a href="#signup">Sign Up</a></li>
              </ul>
            </nav>
          
    
          {/* Main Content */}
          <main className="main-content">
            <section className="slogan">
              <h3>Ensemble, améliorons nos communes!</h3>
              <p>Alert Mairie est une plateforme moderne dédiée à faciliter la gestion des signalements dans les mairies du Cameroun.</p>
            </section>
    
            <section className="image-container">
           {/* <img src="votre-image.jpg" alt="Image de signalement" /> */}
            </section>
          </main>
    
          {/* Footer */}
          <footer className="footer">
            <p>&copy; 2024 Alert Mairie - Tous droits réservés</p>
            <p>Développé pour les mairies du Cameroun.</p>
          </footer>
        </div>
   
    

  );
}

export default AlertForm;