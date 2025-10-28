import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Accueil', icon: '🏠' },
    { path: '/technique', label: 'Guide Technique', icon: '⚙️' },
    { path: '/admin', label: 'Guide Administrateur', icon: '👑' },
    { path: '/esn', label: 'Guide ESN', icon: '🏢' },
    { path: '/client', label: 'Guide Client', icon: '👤' },
    { path: '/consultant', label: 'Guide Consultant', icon: '💼' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>📚 MCI Docs</h2>
        <p className="sidebar-subtitle">Maghrib Connect IT</p>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
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
  );
};

export default Sidebar;
