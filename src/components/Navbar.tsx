import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-16 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg w-[90%] max-w-7xl">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
          Imprezit
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center justify-center space-x-8">
          <Link to="/" className="nav-link text-lg font-medium">
            Home
          </Link>
          <Link to="/services" className="nav-link text-lg font-medium">
            What We Do
          </Link>
          <Link to="/about" className="nav-link text-lg font-medium">
            About Us
          </Link>
          <Link to="/research" className="nav-link text-lg font-medium">
            R & D
          </Link>
        </div>

        <Link 
          to="/contact"
          className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;