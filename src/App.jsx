// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home'; // Assuming you created these
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import Resume from './pages/Resume';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;