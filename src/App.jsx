import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './components/WelcomePage.jsx';
import {LoginPage} from './components/LoginPage.jsx';
import {SignupPage} from './components/SignupPage.jsx';
import {ProfilePage} from './components/ProfilePage.jsx';

function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;