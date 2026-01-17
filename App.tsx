import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Admin from './pages/Admin';
import { About, Programs, Partnerships, Blog, Contact } from './pages/InnerPages';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Admin Route - No Layout (Has its own sidebar) */}
        <Route path="/admin" element={<Admin />} />

        {/* Public Routes - Wrapped in Main Layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/programs" element={<Layout><Programs /></Layout>} />
        <Route path="/partnerships" element={<Layout><Partnerships /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        
        {/* Fallbacks */}
        <Route path="/terms" element={<Layout><div className="p-20 text-center">Terms of Service Placeholder</div></Layout>} />
        <Route path="/privacy" element={<Layout><div className="p-20 text-center">Privacy Policy Placeholder</div></Layout>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;