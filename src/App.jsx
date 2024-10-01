import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import Videos from './pages/Videos';
import Documentos from './pages/Documentos';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projetos">Projetos</Link></li>
          <li><Link to="/videos">Vídeos</Link></li>
          <li><Link to="/documentos">Documentos</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/documentos" element={<Documentos />} />
      </Routes>
    </div>
  );
}

export default App;
