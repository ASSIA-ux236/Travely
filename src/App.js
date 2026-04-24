import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// --- GARDER LES COMPOSANTS DE VOTRE BINÔME ---
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import MesReservations from './pages/MesReservations';
import Reserver from './pages/Reserver';

// --- AJOUTER VOS PAGES (Vérifiez bien que les fichiers existent dans ces dossiers) ---
import Accueil from './pages/Accueil';
import DestinationDetail from './pages/DestinationDetail';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageVoyages from './pages/admin/ManageVoyages';
import ManageReservations from './pages/admin/ManageReservations';
import ManageUsers from './pages/admin/ManageUsers';

// Import du CSS global
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* La Navbar s'affichera sur toutes les pages */}
        <Navbar />

        <div className="content">
          <Routes>
            {/* 1. L'ACCUEIL : On affiche votre page Accueil au lieu de rediriger vers login */}
            <Route path="/" element={<Accueil />} />

            {/* 2. ROUTES PUBLIQUES (Binôme 1) */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* 3. VOTRE PAGE DÉTAIL (Publique) */}
            <Route path="/destinations/:id" element={<DestinationDetail />} />

            {/* 4. ROUTES PROTÉGÉES USER (Binôme 1) */}
            <Route 
              path="/mes-reservations" 
              element={<PrivateRoute><MesReservations /></PrivateRoute>} 
            />
            <Route 
              path="/reserver" 
              element={<PrivateRoute><Reserver /></PrivateRoute>} 
            />

            {/* 5. VOS ROUTES PROTÉGÉES ADMIN */}
            <Route 
              path="/admin/dashboard" 
              element={<PrivateRoute><AdminDashboard /></PrivateRoute>} 
            />
            <Route 
              path="/admin/voyages" 
              element={<PrivateRoute><ManageVoyages /></PrivateRoute>} 
            />
            <Route 
              path="/admin/reservations" 
              element={<PrivateRoute><ManageReservations /></PrivateRoute>} 
            />
            <Route 
              path="/admin/users" 
              element={<PrivateRoute><ManageUsers /></PrivateRoute>} 
            />

            {/* Redirection si l'URL n'existe pas : on retourne à l'accueil */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;