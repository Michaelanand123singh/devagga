import { useState, useEffect, memo } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

// Memoized NavLink to prevent unnecessary re-renders
const NavItem = memo(({ link, onClick }) => (
  <li key={link.name}>
    <NavLink 
      to={link.path} 
      className={({ isActive }) => 
        `py-2 inline-block ${isActive ? 
          'text-primary-light font-medium relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary' :
          'text-white hover:text-primary-light transition-all duration-300 hover:scale-105'
        }`
      }
      onClick={onClick}
    >
      {link.name}
    </NavLink>
  </li>
))

const MobileNavItem = memo(({ link, onClick }) => (
  <li key={link.name}>
    <NavLink 
      to={link.path}
      className={({ isActive }) => 
        `block py-3 px-4 rounded-lg ${isActive ? 'bg-dark/50 text-primary-light' : 'text-white hover:bg-dark/30'}`
      }
      onClick={onClick}
    >
      {link.name}
    </NavLink>
  </li>
))

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

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className={`w-full ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`
            rounded-full 
            ${scrolled ? 'bg-black/60 backdrop-filter backdrop-blur-sm shadow-md' : 'bg-transparent shadow-none'} 
            py-3 px-6 
            transition-all duration-300
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
                    <NavItem key={link.name} link={link} />
                  ))}
                </ul>
              </nav>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden text-white focus:outline-none p-2 rounded-full hover:bg-dark-light" 
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
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
      </div>
      
      {/* Mobile Menu - Positioned absolutely below the header */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-light mt-2 mx-4 rounded-2xl shadow-lg overflow-hidden">
          <div className="py-3 px-6">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <MobileNavItem key={link.name} link={link} onClick={closeMenu} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

export default memo(Navbar)