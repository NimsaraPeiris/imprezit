import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Footer } from '../components/Footer';
import { FocusCards } from '../components/ui/focus-cards';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge digital solutions",
      features: [
        "Legacy System Modernization",
        "Cloud Migration",
        "Process Automation",
        "Digital Strategy Consulting"
      ]
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions to meet your unique needs",
      features: [
        "Web Applications",
        "Mobile Apps",
        "Enterprise Software",
        "API Integration"
      ]
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights",
      features: [
        "Business Intelligence",
        "Predictive Analytics",
        "Data Visualization",
        "Real-time Analytics"
      ]
    }
  ];

  const focusCards = [
    {
      title: "Fullstack Development",
      src: "/images/services/fullstack.jpg",
      description: "End-to-end web solutions with modern technologies"
    },
    {
      title: "Mobile App Development",
      src: "/images/services/mobile.jpg",
      description: "Native and cross-platform mobile applications"
    },
    {
      title: "User Experience Design",
      src: "/images/services/ux.jpg",
      description: "Intuitive and engaging user interfaces"
    },
    {
      title: "AI & Machine Learning",
      src: "/images/services/ai.jpg",
      description: "Intelligent solutions for complex problems"
    },
    {
      title: "Business Digitalization",
      src: "/images/services/digital.jpg",
      description: "Digital transformation for modern businesses"
    },
    {
      title: "Digital Marketing",
      src: "/images/services/marketing.jpg",
      description: "Strategies to grow your online presence"
    },
    {
      title: "Technical Consulting",
      src: "/images/services/consulting.jpg",
      description: "Expert guidance and strategic planning"
    }
  ];

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl font-bold text-gray-900 mb-8">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We offer comprehensive digital solutions tailored to your business needs. 
              From web development to AI integration, our services are designed to 
              propel your business into the future.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg 
              className="w-6 h-6 text-gray-400"
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </motion.section>

      {/* Focus Cards Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Expertise
          </motion.h2>
          <FocusCards cards={focusCards} />
        </div>
      </motion.section>      
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Services;