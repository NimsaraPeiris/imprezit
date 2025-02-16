import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const footerContent = {
    companyInfo: {
        description: 'ImprezIT delivers innovative digital solutions to transform businesses for the modern age.',
        social: [
            { name: 'LinkedIn', url: '#', icon: '🔗' },
            { name: 'Twitter', url: '#', icon: '🐦' },
            { name: 'GitHub', url: '#', icon: '💻' }
        ]
    },
    quickLinks: [
        { name: 'About Us', url: '/about' },
        { name: 'Services', url: '/services' },
        { name: 'Projects', url: '/projects' },
        { name: 'Contact', url: '/contact' }
    ],
    services: [
        { name: 'Web Development', url: '/services/web' },
        { name: 'Mobile Apps', url: '/services/mobile' },
        { name: 'Cloud Solutions', url: '/services/cloud' },
        { name: 'AI Integration', url: '/services/ai' }
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
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white">ImprezIT</h3>
                        <p className="text-gray-400">{footerContent.companyInfo.description}</p>
                        <div className="flex space-x-4">
                            {footerContent.companyInfo.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.url}
                                    className="text-2xl hover:text-primary-500 transition-colors"
                                    aria-label={item.name}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-4">
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
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-6">Services</h3>
                        <ul className="space-y-4">
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
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <span>📍</span>
                                <span>{footerContent.contact.address}</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>📧</span>
                                <a
                                    href={`mailto:${footerContent.contact.email}`}
                                    className="hover:text-primary-500 transition-colors"
                                >
                                    {footerContent.contact.email}
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span>📱</span>
                                <a
                                    href={`tel:${footerContent.contact.phone}`}
                                    className="hover:text-primary-500 transition-colors"
                                >
                                    {footerContent.contact.phone}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} ImprezIT. All rights reserved.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
};
