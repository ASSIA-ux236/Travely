import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import des composants
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

// Import des pages
import Login from './pages/Login';
import Register from './pages/Register';
import MesReservations from './pages/MesReservations';
import Reserver from './pages/Reserver';

// Import du CSS global
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* La Navbar s'affichera sur toutes les pages si l'utilisateur est connecté */}
        <Navbar />

        <div className="content">
          <Routes>
            {/* Redirection automatique de l'accueil vers le login */}
            <Route path="/" element={<Navigate to="/login" />} />

            {/* Routes Publiques */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Routes Protégées (Accessibles uniquement si connecté) */}
            <Route 
              path="/mes-reservations" 
              element={
                <PrivateRoute>
                  <MesReservations />
                </PrivateRoute>
              } 
            />
            
            <Route 
              path="/reserver" 
              element={
                <PrivateRoute>
                  <Reserver />
                </PrivateRoute>
              } 
            />

            {/* Page 404 ou redirection si la route n'existe pas */}
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;