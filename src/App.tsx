import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import LandingPage from './pages/home';
import ChallengePage from './pages/challenge';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/challenge" element={<ChallengePage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
