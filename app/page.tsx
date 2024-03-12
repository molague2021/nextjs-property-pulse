import React from 'react';
import Link from 'next/link';
import Hero from '../components/Hero/Hero';
import InfoBoxes from '../components/InfoBoxes/InfoBoxes';

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
    </>
  );
};

export default HomePage;
