import React from 'react';
import VanteRibbonHero from './sections/VanteRibbonHero';
import ServicesSection from './sections/ServicesSection';
import AboutSection from './sections/AboutSection';
import ProcessSection from './sections/ProcessSection';
import WorkSection from './sections/WorkSection';
import InsightsSection from './sections/InsightsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#030303] text-white selection:bg-purple-600/30 selection:text-purple-200">
      <main className="relative z-10 flex flex-col">
        <VanteRibbonHero />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <WorkSection />
        <InsightsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
