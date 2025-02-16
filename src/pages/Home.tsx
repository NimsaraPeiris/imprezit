import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Particles } from '../components/Particles';
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

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroTranslateY = useTransform(scrollY, [0, 300], [0, -100]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.5]);
  const bentoOpacity = useTransform(scrollY, [100, 400], [0, 1]);
  const bentoTranslateY = useTransform(scrollY, [100, 400], [100, 0]);

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

      {/* Bento Grid Section */}
      <motion.section
        style={{ opacity: bentoOpacity, y: bentoTranslateY }}
        className="min-h-screen py-20 px-6 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Solutions</h2>
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
    </div>
  );
};

export default Home;