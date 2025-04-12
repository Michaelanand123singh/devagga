import { motion, AnimatePresence } from 'framer-motion'
import PortfolioItem from './PortfolioItem'

const PortfolioGrid = ({ items = [] }) => {
  console.log("Portfolio items in grid:", items); // Debug log
  
  return (
    <div className="container mx-auto px-4">
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
      >
        <AnimatePresence>
          {items && items.length > 0 ? (
            items.map((item) => (
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
            ))
          ) : null}
        </AnimatePresence>
      </motion.div>
      
      {(!items || items.length === 0) && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-400">No projects found in this category.</p>
        </div>
      )}
    </div>
  )
}

export default PortfolioGrid