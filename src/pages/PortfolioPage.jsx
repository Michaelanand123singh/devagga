import { useState } from 'react'
import AnimatedSection from '../components/common/AnimatedSection'
import PortfolioGrid from '../components/portfolio/PortfolioGrid'
import PortfolioFilters from '../components/portfolio/PortfolioFilters'
import { portfolioData } from '../data/portfolioData'

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  // Get unique categories from portfolio data
  const categories = ['all', ...new Set(portfolioData.map(item => item.category))]
  
  // Filter portfolio items based on active filter
  const filteredPortfolio = activeFilter === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeFilter)
    
  return (
    <div className="pt-20 pb-24">
      {/* Hero Section */}
      <section className="bg-dark-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeUp">
            <h1 className="text-center mb-6">Our Creative Portfolio</h1>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
              Explore our collection of animation projects across various industries and styles.
              Each piece represents our passion for bringing imagination to life.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeIn" delay={0.2}>
            <PortfolioFilters 
              categories={categories} 
              activeFilter={activeFilter} 
              setActiveFilter={setActiveFilter} 
            />
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={0.4}>
            <PortfolioGrid portfolio={filteredPortfolio} />
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage