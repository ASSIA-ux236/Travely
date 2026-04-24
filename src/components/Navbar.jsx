import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  if (!isLoggedIn) return null; // La navbar ne s'affiche pas si on n'est pas connecté

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/mes-reservations">Travely</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/reserver">Réserver un voyage</Link></li>
        <li><Link to="/mes-reservations">Mes Réservations</Link></li>
        <li><button onClick={handleLogout} className="btn-logout">Déconnexion</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;