import { useState } from 'react'
import ProjectModal from './ProjectModal'

const PortfolioItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  
  return (
    <>
      <div 
        className="relative group overflow-hidden rounded-lg cursor-pointer h-64 bg-dark-light"
        onClick={openModal}
      >
        {/* Image */}
        <img 
          src={item.thumbnail} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-xl font-display font-semibold text-white">{item.title}</h3>
          <p className="text-sm text-gray-300 mt-1">{item.category}</p>
        </div>
        
        {/* Play button for videos */}
        {item.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-primary/80 text-white flex items-center justify-center group-hover:bg-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      
      {/* Modal */}
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        project={item} 
      />
    </>
  )
}

export default PortfolioItem