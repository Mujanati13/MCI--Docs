import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Maghrib Connect IT</span>
          </h1>
          <p className="hero-subtitle">Documentation & Guides</p>
          <div className="hero-description">
            <p>Bienvenue sur la plateforme de documentation de Maghrib Connect IT</p>
            <p>Explorez nos guides complets pour maîtriser tous les aspects de la plateforme</p>
          </div>
        </div>
      </div>

      <div className="cards-grid">
        <div className="info-card tech">
          <div className="card-icon">⚙️</div>
          <h3>Guide Technique</h3>
          <p>Hébergement, prérequis, configuration serveur et déploiement</p>
          <div className="card-tags">
            <span className="tag">Nginx</span>
            <span className="tag">MySQL</span>
            <span className="tag">Node.js</span>
          </div>
        </div>

        <div className="info-card admin">
          <div className="card-icon">👑</div>
          <h3>Guide Administrateur</h3>
          <p>Gestion complète de la plateforme, utilisateurs et cycles</p>
          <div className="card-tags">
            <span className="tag">Validation</span>
            <span className="tag">Supervision</span>
            <span className="tag">Commission</span>
          </div>
        </div>

        <div className="info-card esn">
          <div className="card-icon">🏢</div>
          <h3>Guide ESN</h3>
          <p>Gestion des consultants, réponse aux AO et suivi des missions</p>
          <div className="card-tags">
            <span className="tag">Consultants</span>
            <span className="tag">Appels d'offres</span>
            <span className="tag">Factures</span>
          </div>
        </div>

        <div className="info-card client">
          <div className="card-icon">👤</div>
          <h3>Guide Client</h3>
          <p>Publication d'AO, validation des CRA et gestion des factures</p>
          <div className="card-tags">
            <span className="tag">Appels d'offres</span>
            <span className="tag">CRA</span>
            <span className="tag">BDC</span>
          </div>
        </div>

        <div className="info-card consultant">
          <div className="card-icon">💼</div>
          <h3>Guide Consultant</h3>
          <p>Gestion des CRA, notes de frais et suivi des missions</p>
          <div className="card-tags">
            <span className="tag">CRA</span>
            <span className="tag">Notes de frais</span>
            <span className="tag">Missions</span>
          </div>
        </div>

        <div className="info-card info">
          <div className="card-icon">ℹ️</div>
          <h3>À propos</h3>
          <p>Plateforme de gestion collaborative pour ESN, Clients et Consultants</p>
          <div className="card-tags">
            <span className="tag">v1.0.0</span>
            <span className="tag">2025</span>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2>Fonctionnalités principales</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">📋</div>
            <h4>Gestion des AO</h4>
            <p>Publiez et répondez aux appels d'offres facilement</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📝</div>
            <h4>CRA & NDF</h4>
            <p>Suivez les comptes rendus et notes de frais</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💰</div>
            <h4>Facturation</h4>
            <p>Gérez les factures et les paiements</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">👥</div>
            <h4>Multi-rôles</h4>
            <p>Admin, ESN, Client, Consultant</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
