import logo from './logo.svg';
import './App.css';
import HeroSection from './pages/heroSection/HeroSection';
import ServicesSection from './pages/services/ServicesSection';
import AboutSection from './pages/aboutSection/AboutSection';
import SkillsSection from './pages/skillsSection/SkillsSection';
import ProjectSchema from './pages/projectSchema/ProjectSchema';
import ReviewCardSlider from './pages/reviewCard/ReviewCardSlider';
import ContactSection from './pages/contact/ContactSection';

function App() {
  return (
    <div>
      <HeroSection></HeroSection>
      <ServicesSection></ServicesSection>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <ProjectSchema></ProjectSchema>
      <ReviewCardSlider></ReviewCardSlider>
      <ContactSection></ContactSection>
    </div>
  );
}

export default App;
