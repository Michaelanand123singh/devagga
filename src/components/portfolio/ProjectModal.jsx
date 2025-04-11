import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../common/Button'

const ProjectModal = ({ isOpen, onClose, project }) => {
  const modalRef = useRef(null)
  
  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden'
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])
  
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])
  
  if (!project) return null
  
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-dark-light rounded-lg shadow-xl"
            ref={modalRef}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 text-white bg-dark/50 rounded-full hover:bg-dark transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Content */}
            <div>
              {/* Media */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                {project.type === 'video' ? (
                  <div className="w-full h-full bg-dark flex items-center justify-center">
                    <iframe
                      src={project.videoUrl}
                      title={project.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <img
                    src={project.image || project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              {/* Details */}
              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">{project.title}</h2>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary-light">{project.category}</span>
                  {project.client && (
                    <span className="text-sm text-gray-400">Client: {project.client}</span>
                  )}
                </div>
                
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300">{project.description}</p>
                  
                  {project.features && (
                    <>
                      <h3 className="text-xl font-semibold mt-6 mb-3">Project Features</h3>
                      <ul className="space-y-1">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-primary-light mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {project.technologies && (
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 text-sm rounded-full bg-dark text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Actions */}
                {project.link && (
                  <div className="mt-8">
                    <Button href={project.link} target="_blank" rel="noopener noreferrer">
                      View Full Project
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal