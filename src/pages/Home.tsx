import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Particles } from '../components/Particles';
import { Footer } from '../components/Footer';
// Remove MeshNetwork import

// Remove colors and getRandomColors as they're moved to Particles component

const bentoItems = [
  {
    title: 'Web Development',
    description: 'Custom web applications and responsive designs',
    color: 'from-blue-500 to-cyan-500',
    span: 'col-span-2'
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'AI Integration',
    description: 'Smart solutions powered by artificial intelligence',
    color: 'from-green-500 to-emerald-500',
    span: 'row-span-2'
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security measures and protocols',
    color: 'from-yellow-500 to-orange-500'
  }
];

const whatWeCanDo = [
  {
    title: 'Digital Transformation',
    description: 'Transform your business with cutting-edge digital solutions and strategies for the modern age.',
    icon: '🚀'
  },
  {
    title: 'Custom Development',
    description: 'Build tailored software solutions that perfectly match your business needs and goals.',
    icon: '💻'
  },
  {
    title: 'Technical Consulting',
    description: 'Get expert guidance on technology decisions and implementation strategies.',
    icon: '🎯'
  }
];

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

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroTranslateY = useTransform(scrollY, [0, 300], [0, -100]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.5]);
  const bentoOpacity = useTransform(scrollY, [100, 400], [0, 1]);
  const bentoTranslateY = useTransform(scrollY, [100, 400], [100, 0]);
  const descriptionOpacity = useTransform(scrollY, [50, 300], [0, 1]);
  const descriptionTranslateY = useTransform(scrollY, [50, 300], [100, 0]);
  const whatWeCanDoOpacity = useTransform(scrollY, [150, 400], [0, 1]);
  const whatWeCanDoTranslateY = useTransform(scrollY, [150, 400], [100, 0]);

  return (
    <div className="pt-0" ref={containerRef}>
      <motion.section 
        style={{ opacity: heroOpacity, y: heroTranslateY }}
        className="relative min-h-screen flex items-center overflow-hidden bg-WHITE"
      >
        <Particles />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ scale: heroScale }} // Add scale transform to content
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Innovate. Transform.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Succeed.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Empowering businesses with cutting-edge solutions for a digital future.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/services"
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 inline-block"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Company Description Section */}
      <motion.section
        style={{ opacity: descriptionOpacity, y: descriptionTranslateY }}
        className="py-24 bg-white relative z-10"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-gray-900 mb-8"
            >
              Why Imprezit
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-xl text-gray-600 leading-relaxed">
                At ImprezIT, we specialize in creating innovative digital solutions that help businesses thrive in the modern world. Our team of experts combines creativity with technical excellence to deliver outstanding results.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                With years of experience and a passion for technology, we're committed to helping our clients achieve their digital transformation goals.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What We Can Do Section */}
      <motion.section
        style={{ opacity: whatWeCanDoOpacity, y: whatWeCanDoTranslateY }}
        className="py-24 bg-gray-50 relative z-10"
      >
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            What We Can Do
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whatWeCanDo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Bento Grid Section */}
      <motion.section
        style={{ opacity: bentoOpacity, y: bentoTranslateY }}
        className="min-h-screen py-20 px-6 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Highlights</h2>
          <div className="grid grid-cols-3 gap-6 auto-rows-[200px]">
            {bentoItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-3xl p-8 bg-gradient-to-r ${item.color} ${item.span || ''} text-white hover:scale-[1.02] transition-transform cursor-pointer`}
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg opacity-90">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;