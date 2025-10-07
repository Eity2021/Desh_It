import logo from './logo.svg';
import './App.css';
import HeroSection from './pages/heroSection/HeroSection';
import ServicesSection from './pages/services/ServicesSection';
import AboutSection from './pages/aboutSection/AboutSection';
import SkillsSection from './pages/skillsSection/SkillsSection';

function App() {
  return (
    <div>
      <HeroSection></HeroSection>
      <ServicesSection></ServicesSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
    </div>
  );
}

export default App;
