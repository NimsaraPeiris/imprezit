import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Footer } from '../components/Footer';
import { ExpandableCards } from '../components/ui/expandable-card';

const researchAreas = [
  {
    title: 'AI & Machine Learning',
    description: 'Advancing the boundaries of artificial intelligence',
    icon: '🤖',
    image: '/images/research/ai.jpg',
    ctaText: 'Learn More',
    ctaLink: '#',
    content: `Our AI & Machine Learning research focuses on developing practical business applications 
    through deep learning, natural language processing, and computer vision. We're committed to 
    advancing the field while ensuring ethical AI development practices.
    
    Key Areas:
    • Deep Learning Architectures
    • Natural Language Processing
    • Computer Vision Systems
    • Ethical AI Development
    • Business Intelligence Integration`
  },
  {
    title: 'Cloud Computing',
    description: 'Next-generation cloud architectures',
    icon: '☁️',
    image: '/images/research/cloud.jpg',
    ctaText: 'Learn More',
    ctaLink: '#',
    content: `We're exploring innovative approaches to cloud computing, focusing on serverless 
    architectures and edge computing solutions. Our research aims to optimize performance, enhance 
    security, and improve scalability for enterprise applications.
    
    Focus Areas:
    • Serverless Computing
    • Edge Computing
    • Cloud Security
    • Performance Optimization
    • Distributed Systems`
  },
  {
    title: 'Quantum Computing',
    description: 'Preparing for the quantum future',
    icon: '⚛️',
    image: '/images/research/quantum.jpg',
    ctaText: 'Learn More',
    ctaLink: '#',
    content: `Our quantum computing research investigates the potential of quantum algorithms and their 
    applications in cryptography and machine learning. We're working to prepare businesses for the 
    quantum computing revolution.
    
    Research Areas:
    • Quantum Algorithms
    • Quantum Cryptography
    • Quantum Machine Learning
    • Error Correction
    • Quantum-Safe Security`
  }
];

const Research = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Add scroll animations
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.5]);
  const heroTranslateY = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <div className="pt-0 overflow-hidden"> {/* Added overflow-hidden here */}
      {/* Hero Section - Updated with scroll effects */}
      <motion.section 
        style={{ 
          opacity: heroOpacity,
          scale: heroScale,
          y: heroTranslateY
        }}
        className="relative min-h-screen flex items-center bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden" /* Added overflow-hidden here */
      >
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Research & Development
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Pushing the boundaries of technology through innovative research and development
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Research Areas Section with Expandable Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Research Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exploring the frontiers of technology to create innovative solutions
            </p>
          </motion.div>

          <ExpandableCards cards={researchAreas} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Research;
