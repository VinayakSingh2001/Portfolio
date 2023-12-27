import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Books from './pages/Books';
import Skills from './pages/Skills';
import Connect from './pages/Connect';
import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/books" element={<Books />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
