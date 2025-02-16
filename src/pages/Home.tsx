import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const colors = [
  'rgb(59, 130, 246)', // blue-500
  'rgb(16, 185, 129)', // emerald-500
  'rgb(236, 72, 153)', // pink-500
  'rgb(139, 92, 246)', // violet-500
  'rgb(245, 158, 11)', // amber-500
];

const getRandomColors = () => {
  const shuffled = [...colors].sort(() => Math.random() - 0.5);
  return shuffled;
};

const Home = () => {
  const [ref, inView] = useInView({
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
                  className="absolute h-32 w-1 rounded-full"
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
                      ease: "linear"
                    },
                    y: {
                      duration: Math.random() * 20 + 15,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "linear"
                    },
                    backgroundColor: {
                      duration: 1,
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

        {/* Features Section */}
        <section ref={ref} className="section-padding bg-white">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We combine innovation with expertise to deliver exceptional results
                for our clients.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation First',
                  description: 'Cutting-edge solutions that keep you ahead of the curve',
                },
                {
                  title: 'Expert Team',
                  description: 'Dedicated professionals with deep industry expertise',
                },
                {
                  title: 'Results Driven',
                  description: 'Focused on delivering measurable business outcomes',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;