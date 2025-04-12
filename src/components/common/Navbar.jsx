import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const isActive = (path) => {
    return location.pathname === path 
      ? 'text-primary-light font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
      : 'text-white hover:text-primary-light transition-all duration-300 hover:scale-105'
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className={`
          rounded-full 
          ${scrolled ? 'bg-black/60 backdrop-filter backdrop-blur-sm' : 'bg-transparent'} 
          shadow-lg
          py-3 px-6 
          transition-all duration-300
          ${scrolled ? 'shadow-md' : 'shadow-none'}
        `}>
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="font-display font-bold text-white flex items-center gap-2 transition-transform hover:scale-105 duration-300"
            >
              <span className="text-2xl gradient-text">DevAgga</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink 
                      to={link.path} 
                      className={({ isActive }) => 
                        `py-2 inline-block ${isActive ? 
                          'text-primary-light font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary' :
                          'text-white hover:text-primary-light transition-all duration-300 hover:scale-105'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/hire-me" 
                    className="ml-4 inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors shadow-sm hover:shadow"
                  >
                    Hire Me
                  </Link>
                </li>
              </ul>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white focus:outline-none p-2 rounded-full hover:bg-dark-light" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col space-y-1.5">
                <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-light mt-2 rounded-2xl mx-4 shadow-lg overflow-hidden">
          <div className="py-3 px-6">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => 
                      `block py-3 px-4 rounded-lg ${isActive ? 'bg-dark/50 text-primary-light' : 'text-white hover:bg-dark/30'}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  to="/hire-me" 
                  className="block py-3 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-center shadow-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar