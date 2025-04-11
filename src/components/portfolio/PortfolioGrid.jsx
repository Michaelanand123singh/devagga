import { useState, useEffect } from 'react'
import PortfolioItem from './PortfolioItem'
import PortfolioFilters from './PortfolioFilters'
import { motion, AnimatePresence } from 'framer-motion'

const PortfolioGrid = ({ items = [] }) => {
  const [filteredItems, setFilteredItems] = useState(items)
  const [activeFilter, setActiveFilter] = useState('all')
  
  // Get unique categories from all portfolio items
  const categories = ['all', ...new Set(items.map(item => item.category))]
  
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredItems(items)
    } else {
      setFilteredItems(items.filter(item => item.category === activeFilter))
    }
  }, [activeFilter, items])
  
  const handleFilterChange = (category) => {
    setActiveFilter(category)
  }
  
  return (
    <div className="container mx-auto px-4">
      <PortfolioFilters 
        categories={categories} 
        activeFilter={activeFilter} 
        onFilterChange={handleFilterChange} 
      />
      
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PortfolioItem item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-400">No projects found in this category.</p>
        </div>
      )}
    </div>
  )
}

export default PortfolioGrid