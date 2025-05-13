
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SpecialtiesSection from '../components/SpecialtiesSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ direction: 'rtl' }}>
      <main className="flex-grow">
        <Navbar />
        <Hero />
        <SpecialtiesSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
