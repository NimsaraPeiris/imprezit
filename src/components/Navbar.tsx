import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 sm:top-8 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-[95%] max-w-7xl mx-auto">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
            Imprezit
          </Link>

          {/* Toggle Button for Mobile */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? (
                <HiX className="w-6 h-6 text-gray-600" />
              ) : (
                <HiMenu className="w-6 h-6 text-gray-600" />
              )}
            </motion.div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-4 xl:space-x-8">
            <Link to="/" className="nav-link text-base xl:text-lg font-medium hover:text-primary-500 transition-colors">
              Home
            </Link>
            <Link to="/services" className="nav-link text-base xl:text-lg font-medium hover:text-primary-500 transition-colors">
              Our Services
            </Link>
            <Link to="/about" className="nav-link text-base xl:text-lg font-medium hover:text-primary-500 transition-colors">
              About Us
            </Link>
            <Link to="/research" className="nav-link text-base xl:text-lg font-medium hover:text-primary-500 transition-colors">
              R & D
            </Link>
          </div>

          <Link 
            to="/contact"
            className="hidden lg:block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 xl:px-8 xl:py-3 rounded-lg text-base xl:text-lg font-medium hover:opacity-90 transition-all"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-4"
            >
              <div className="flex flex-col space-y-4 px-2">
                <Link to="/" className="nav-link text-xl" onClick={toggleMenu}>
                  Home
                </Link>
                <Link to="/services" className="nav-link text-xl" onClick={toggleMenu}>
                  Our Services
                </Link>
                <Link to="/about" className="nav-link text-xl" onClick={toggleMenu}>
                  About Us
                </Link>
                <Link to="/research" className="nav-link text-xl" onClick={toggleMenu}>
                  R & D
                </Link>
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity text-center"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;