import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const researchAreas = [
  {
    title: 'Artificial Intelligence',
    description: 'Advancing machine learning and neural networks for business applications',
    icon: '🤖'
  },
  {
    title: 'Cloud Computing',
    description: 'Developing scalable and efficient cloud-native solutions',
    icon: '☁️'
  },
  {
    title: 'IoT Solutions',
    description: 'Creating connected ecosystems for smart infrastructure',
    icon: '📱'
  },
  {
    title: 'Blockchain',
    description: 'Implementing secure and transparent distributed systems',
    icon: '🔗'
  }
];

const Research = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-r from-gray-900 to-gray-800">
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
      </section>

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
              Our Research Focus
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Exploring cutting-edge technologies to drive innovation and create impactful solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Innovation Timeline
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our journey of continuous innovation and technological advancement
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[2023, 2022, 2021].map((year, index) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start mb-12"
              >
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-lg text-white font-bold">
                  {year}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Major Achievement {year}
                  </h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
