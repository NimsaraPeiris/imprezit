import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Footer } from '../components/Footer';

const researchAreas = [
  {
    title: 'AI & Machine Learning',
    description: 'Advancing the boundaries of artificial intelligence through deep learning, natural language processing, and computer vision. Our research focuses on practical business applications and ethical AI development.',
    icon: '🤖'
  },
  {
    title: 'Cloud Computing',
    description: 'Exploring next-generation cloud architectures, serverless computing, and edge computing solutions. We focus on optimization, security, and scalability for enterprise applications.',
    icon: '☁️'
  },
  {
    title: 'Quantum Computing',
    description: 'Investigating quantum algorithms, quantum cryptography, and quantum machine learning. Preparing for the future of computing with quantum-ready solutions and protocols.',
    icon: '⚛️'
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

      {/* Research Areas Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
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

          <div className="max-w-4xl mx-auto space-y-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative h-48 bg-white rounded-lg border border-gray-200 overflow-hidden cursor-pointer"
              >
                {/* Title Container - Centered by default, moves left on hover */}
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out group-hover:translate-x-0 group-hover:justify-start">
                  <div className="flex items-center gap-4 px-6 group-hover:w-[30%]">
                    <span className="text-4xl">{area.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900 whitespace-nowrap">
                      {area.title}
                    </h3>
                  </div>
                </div>

                {/* Description Container - Hidden by default, appears from right */}
                <div 
                  className="absolute right-0 inset-y-0 w-[70%] flex items-center p-6 bg-white translate-x-full transition-all duration-500 ease-in-out group-hover:translate-x-0"
                >
                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Research;
