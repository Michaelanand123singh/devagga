import Hero from '../components/home/Hero'
import AboutUs from '../components/home/AboutUs'
import ServicesOverview from '../components/home/ServicesOverview'
import AnimationExpertise from '../components/home/AnimatedExpertise'
import IndustryServices from '../components/home/IndustryServices'
import ProcessSteps from '../components/home/ProcessSteps'
import TechniquesShowcase from '../components/home/TechniquesShowcase'
import CollaborationSection from '../components/home/CllaborationSection'
import ContactCTA from '../components/home/ContactCTA'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <ServicesOverview />
      <AnimationExpertise />
      <IndustryServices />
      <ProcessSteps />
      <TechniquesShowcase />
      <CollaborationSection />
      <ContactCTA />
    </div>
  )
}

export default HomePage