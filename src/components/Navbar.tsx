import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-16 left-1/2 -translate-x-1/2 z-50 px-4 py-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg w-[90%] max-w-7xl">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
          Imprezit
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center justify-center space-x-10">
          <Link to="/" className="nav-link text-2xl font-medium">
            Home
          </Link>
          <Link to="/services" className="nav-link text-2xl font-medium">
            What We Do
          </Link>
          <Link to="/about" className="nav-link text-2xl font-medium">
            About Us
          </Link>
          <Link to="/research" className="nav-link text-2xl font-medium">
            R & D
          </Link>
        </div>

        <Link 
          to="/contact"
          className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-lg text-xl font-medium hover:opacity-90 transition-opacity"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;