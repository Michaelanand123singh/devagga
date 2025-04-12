import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectModal from './ProjectModal'

const PortfolioItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  if (!item) return null;
  
  return (
    <>
      <motion.div 
        className="bg-dark-light rounded-lg overflow-hidden cursor-pointer group"
        whileHover={{ y: -10 }}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Thumbnail */}
        <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
          <img 
            src={item.image || '/api/placeholder/400/320'} 
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Category Tag */}
          <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full text-xs font-medium text-white">
            {item.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold mb-1 transition-colors group-hover:text-primary-light">
            {item.title}
          </h3>
          {item.client && (
            <p className="text-sm text-gray-400 mb-2">Client: {item.client}</p>
          )}
          
          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-3">
              {item.tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs bg-dark rounded-full px-2 py-1 text-gray-400"
                >
                  {tag}
                </span>
              ))}
              {item.tags.length > 3 && (
                <span className="text-xs bg-dark rounded-full px-2 py-1 text-gray-400">
                  + {item.tags.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      </motion.div>
      
      {/* Project Modal */}
      <ProjectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={item}
      />
    </>
  )
}

export default PortfolioItem