import React from 'react';
import Hero from './components/hero';
import Features from './components/features';
import TechTags from './components/techTags';

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <TechTags />
    </>
  );
};

export default LandingPage;
