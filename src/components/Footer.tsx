import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const footerContent = {
    companyInfo: {
        description: 'Imprezit transforms the world with cutting-edge digital solutions that empower innovation and growth in the modern age.',

    },
    quickLinks: [
        { name: 'About Us', url: '/about' },
        { name: 'Services', url: '/services' },
        { name: 'Projects', url: '/projects' },
        { name: 'Contact Us', url: '/contact' }
    ],
    services: [
        { name: 'Full-Stack Development', url: '/services/' },
        { name: 'Mobile App Development', url: '/services/' },
        { name: 'User Experience', url: '/services/' }

    ],
    contact: {
        address: '123 Tech Street, Digital City, 12345',
        email: 'contact@imprezit.com',
        phone: '+1 (555) 123-4567'
    }
};

export const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 text-gray-300 py-16 relative z-10"
        >
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Company Info */}
                    <div className="space-y-6 ml-4">
                        <h3 className="text-7xl font-bold text-white">Imprezit</h3>
                        <p className="text-gray-400 text-xl">{footerContent.companyInfo.description}</p>
                        <div className="flex justify-center lg:justify-start">
                            <Link
                                to="/contact"
                                className="hidden lg:inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-lg text-2xl font-medium hover:opacity-90 transition-opacity"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className='ml-4 md:ml-32'>
                        <h3 className="text-2xl font-semibold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-xl">
                            {footerContent.quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.url}
                                        className="hover:text-primary-500 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className='ml-4 md:ml-32'>
                        <h3 className="text-2xl font-semibold text-white mb-6">Services</h3>
                        <ul className="space-y-4 text-xl">
                            {footerContent.services.map((service) => (
                                <li key={service.name}>
                                    <Link
                                        to={service.url}
                                        className="hover:text-primary-500 transition-colors"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className='ml-4 md:ml-32'>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 pt-12 text-xl">
                                <Link to="/services#ai" className="hover:text-primary-500 transition-colors">
                                    Artificial Intelligence
                                </Link>
                            </li>
                            <li className="flex items-center space-x-3 text-xl">
                                <Link to="/services#digitization" className="hover:text-primary-500 transition-colors">
                                    Business Digitization
                                </Link>
                            </li>
                            <li className="flex items-center space-x-3 text-xl">
                                <Link to="/services#consultation" className="hover:text-primary-500 transition-colors">
                                    Technical & Business Consultation
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <p className="text-gray-400 text-center">
                            © {new Date().getFullYear()} Imprezit. All rights reserved.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-4 md:mt-0"
                        >
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};
