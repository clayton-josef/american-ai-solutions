import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SystemSection from './components/SystemSection';
import ComparisonSection from './components/ComparisonSection';
import AccessSection from './components/AccessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: '#E3E2DE', minHeight: '100vh' }}>
      <Navigation />
      <main>
        <HeroSection />
        <SystemSection />
        <ComparisonSection />
        <ContactSection />
        <AccessSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
