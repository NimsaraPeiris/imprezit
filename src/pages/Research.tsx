import { motion, useScroll, useTransform, easeOut } from 'framer-motion';
import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { ExpandableCards } from '../components/ui/expandable-card';

const researchAreas = [
  {
    title: 'Yathraa - Experience Based Travel Platform for Sri Lanka',
    description: 'An experience-based travel platform designed to showcase the unique beauty, culture, and adventures of Sri Lanka, offering tailored travel experiences for explorers.',
    icon: '🌴',
    image: 'images/research/yathraa.png',
    points: `Key Features:
    • Personalized Travel Itineraries
    • Cultural and Adventure Tours
    • Local Guides and Experts
    • Sustainable Tourism Practices
    • User-Friendly Booking System`,
    ctaText: 'Learn More',
    gradient: 'from-primary-500 to-secondary-500',
    ctaLink: '#',
    content: `Yathraa is an innovative travel platform that curates personalized travel experiences in Sri Lanka. 
    It highlights the country's rich culture, stunning landscapes, and adventurous activities, providing travelers 
    with unique and memorable journeys.`
  },
  {
    title: 'BlockLand - Decentralized Land Registry System Using Blockchain Technology',
    description: 'A decentralized land registry system leveraging blockchain technology to enhance transparency, security, and efficiency in land ownership management.',
    icon: '🏡',
    image: '/images/research/blockland.jpg',
    points: `Focus Areas:
    • Blockchain Integration
    • Land Ownership Verification
    • Fraud Prevention
    • Transaction Transparency
    • Secure Data Management`,
    ctaText: 'Learn More',
    gradient: 'from-purple-500 to-pink-500',
    ctaLink: '#',
    content: `BlockLand utilizes blockchain technology to create a secure and transparent land registry system. 
    It aims to streamline land ownership processes, reduce fraud, and improve the efficiency of land transactions.`
  },
  {
    title: 'FatGo - Comprehensive AI Based Health solution for Fat related diseases',
    description: 'An AI-powered health solution focused on addressing fat-related diseases through personalized insights, innovative tools, and comprehensive care strategies.',
    icon: '🍏',
    image: '/images/research/fatgo.jpg',
    ctaText: 'Learn More',
    gradient: 'from-blue-500 to-indigo-500',
    ctaLink: '#',
    content: `FatGo is an AI-driven health platform dedicated to combating fat-related diseases. It offers personalized 
    health insights, advanced diagnostic tools, and tailored care plans to help individuals manage and prevent conditions 
    related to excess body fat.`,
    points: `Research Areas:
    • AI-Based Diagnostics
    • Personalized Health Insights
    • Innovative Treatment Tools
    • Comprehensive Care Strategies
    • Preventative Health Measures`
  }
];

const keyResearchAreas = [
  { title: 'Artificial Intelligence', icon: '🤖', backgroundImage: 'images/research/ai.jpg' },
  { title: 'Education Tech', icon: '📚', backgroundImage: 'images/research/ed-tech.jpg' },
  { title: 'Health Tech', icon: '🏥', backgroundImage: 'images/research/health.jpg' },
  { title: 'Community Tech', icon: '🌍', backgroundImage: 'images/research/community.jpg' },
  { title: 'Computer Vision', icon: '⚛️', backgroundImage: 'images/research/computer.jpg' },
  { title: 'Business Digitization', icon: '💼', backgroundImage: 'images/research/business.jpg' }
];

const Research = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Add scroll animations
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, 
    [0, 150, 300], 
    [1, 0.5, 0],
    { ease: easeOut }
  );
  const heroTranslateY = useTransform(scrollY, 
    [0, 150, 300], 
    [0, -25, -50],
    { ease: easeOut }
  );
  const heroScale = useTransform(scrollY, 
    [0, 150, 300], 
    [1, 1.1, 1.2],
    { ease: easeOut }
  );

  return (
    <div className="pt-0 overflow-hidden"> {/* Added overflow-hidden here */}
      {/* Hero Section - Updated with scroll effects */}
      <motion.section
        style={{
          opacity: heroOpacity,
          y: heroTranslateY,
          scale: heroScale,
          transformOrigin: 'center center',
          willChange: 'transform, opacity' // Add will-change for better performance
        }}
        className="relative min-h-[85vh] sm:min-h-screen flex items-center bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden"
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-[95%] sm:max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-6xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight">
              Research & Development
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-6 mx-auto max-w-3xl px-4">
              Pushing the boundaries of technology through innovative research and development
            </p>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r pb-8 sm:pb-12 lg:pb-16 from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Our Key Research Areas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {keyResearchAreas.map((area, index) => (
              <div
                key={index}
                className="relative p-4 sm:p-6 lg:p-8 rounded-3xl overflow-hidden shadow-md flex flex-col items-center justify-center min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] group hover:scale-105 transition-transform duration-300 ease-in-out"
                style={{
                  backgroundImage: `url(${area.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Dark overlay to darken the background */}
                <div className="absolute inset-0 bg-black opacity-30 z-0 rounded-3xl"></div>

                {/* Backdrop blur effect */}
                <div className="absolute inset-0 backdrop-blur-[10px] z-0 rounded-3xl"></div>

                {/* Content wrapper for vertical stacking */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="text-6xl sm:text-8xl text-white">{area.icon}</div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center">
                    {area.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Research Areas Section with Expandable Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center px-6"
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r pb-4 from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  Ongoing Research Projects

                </h2>
              </div>
            </motion.section>

          </motion.div>

          <ExpandableCards cards={researchAreas} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Research;
