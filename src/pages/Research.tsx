import { motion, useScroll, useTransform } from 'framer-motion';
// Remove unused import
// import { useInView } from 'react-intersection-observer';
import { Footer } from '../components/Footer';
import { ExpandableCards } from '../components/ui/expandable-card';

const researchAreas = [
  {
    title: 'Yathraa - Experience Based Travel Platform for Sri Lanka',
    description: 'An experience-based travel platform designed to showcase the unique beauty, culture, and adventures of Sri Lanka, offering tailored travel experiences for explorers.',
    icon: '🌴',
    image: '/images/research/yathraa.jpg',
    ctaText: 'Learn More',
    ctaLink: '#',
    content: `Yathraa is an innovative travel platform that curates personalized travel experiences in Sri Lanka. 
    It highlights the country's rich culture, stunning landscapes, and adventurous activities, providing travelers 
    with unique and memorable journeys.
    
    Key Features:
    • Personalized Travel Itineraries
    • Cultural and Adventure Tours
    • Local Guides and Experts
    • Sustainable Tourism Practices
    • User-Friendly Booking System`
  },
  {
    title: 'BlockLand - Decentralized Land Registry System Using Blockchain Technology',
    description: 'A decentralized land registry system leveraging blockchain technology to enhance transparency, security, and efficiency in land ownership management.',
    icon: '🏡',
    image: '/images/research/blockland.jpg',
    ctaText: 'Learn More',
    ctaLink: '#',
    content: `BlockLand utilizes blockchain technology to create a secure and transparent land registry system. 
    It aims to streamline land ownership processes, reduce fraud, and improve the efficiency of land transactions.
    
    Focus Areas:
    • Blockchain Integration
    • Land Ownership Verification
    • Fraud Prevention
    • Transaction Transparency
    • Secure Data Management`
  },
  {
    title: 'FatGo - Comprehensive AI Based Health solution for Fat related diseases',
    description: 'An AI-powered health solution focused on addressing fat-related diseases through personalized insights, innovative tools, and comprehensive care strategies.',
    icon: '🍏',
    image: '/images/research/fatgo.jpg',
    ctaText: 'Learn More',
    ctaLink: '#',
    content: `FatGo is an AI-driven health platform dedicated to combating fat-related diseases. It offers personalized 
    health insights, advanced diagnostic tools, and tailored care plans to help individuals manage and prevent conditions 
    related to excess body fat.
    
    Research Areas:
    • AI-Based Diagnostics
    • Personalized Health Insights
    • Innovative Treatment Tools
    • Comprehensive Care Strategies
    • Preventative Health Measures`
  }
];

const Research = () => {
  // Remove or comment out the following line if not needed
  // const [ref, inView] = useInView({
  //   threshold: 0.5,
  //   triggerOnce: true,
  // });

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
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">
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
