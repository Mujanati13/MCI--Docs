import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'Accueil', icon: '🏠' },
    { path: '/general', label: 'Guide Général', icon: '📖' },
    { path: '/technique', label: 'Guide Technique', icon: '⚙️' },
    { path: '/admin', label: 'Guide Administrateur', icon: '👑' },
    { path: '/esn', label: 'Guide ESN', icon: '🏢' },
    { path: '/client', label: 'Guide Client', icon: '👤' },
    { path: '/consultant', label: 'Guide Collaborateur', icon: '💼' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button - Mobile Only */}
      <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>

      {/* Overlay - Mobile Only */}
      {isOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>📚 MCI Docs</h2>
          <p className="sidebar-subtitle">Maghrib Connect IT</p>
          <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
            ✕
          </button>
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <p>© 2025 Maghrib Connect IT</p>
          <p className="version">v1.0.0</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
