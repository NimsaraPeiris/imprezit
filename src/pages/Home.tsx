import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const colors = [
  'rgb(255, 255, 255)', // blue-500
  'rgb(221, 126, 250)', // emerald-500
  'rgb(255, 255, 255)', // pink-500
  'rgb(65, 169, 253)', // violet-500
  'rgb(11, 140, 245)', // amber-500
];

const getRandomColors = () => {
  const shuffled = [...colors].sort(() => Math.random() - 0.5);
  return shuffled;
};

const Home = () => {
  useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <div className="pt-0">
        {/* Hero Section with Interactive Background */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
          {/* hero-gradient */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => {
              const particleColors = getRandomColors();
              return (
                <motion.div
                  key={i}
                  className="absolute h-16 w-16 rounded-full cursor-pointer"
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                  }}
                  animate={{
                    x: [
                      Math.random() * window.innerWidth,
                      Math.random() * window.innerWidth,
                      Math.random() * window.innerWidth,
                    ],
                    y: [
                      Math.random() * window.innerHeight,
                      Math.random() * window.innerHeight,
                      Math.random() * window.innerHeight,
                    ],
                    backgroundColor: particleColors,
                  }}
                  transition={{
                    x: {
                      duration: Math.random() * 20 + 15,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "anticipate"
                    },
                    y: {
                      duration: Math.random() * 20 + 15,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "anticipate"
                    },
                    backgroundColor: {
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }
                  }}
                  style={{
                    position: 'fixed',
                    backgroundColor: particleColors[0],
                  }}
                />
              );
            })}
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
                >
                  Get Started
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;