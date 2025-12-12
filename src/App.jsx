import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Informacion from './pages/Informacion';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informacion" element={<Informacion />} />
      </Routes>
    </Router>
  );
}

export default App
