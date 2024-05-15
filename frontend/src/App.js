import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import RegistrationPage from './Components/RegistrationPage';
import LoginPage from './Components/LoginPage';
import ProfilePage from './Components/ProfilePage';
import AboutUsPage from './Components/AboutUsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<RegistrationPage />} />
        <Route path="/logout" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
};

export default App;