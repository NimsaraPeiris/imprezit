import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
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
    span: 'row-span-1'
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security measures and protocols',
    color: 'from-yellow-500 to-orange-500',
    // span: 'col-span-1'
  }
];

const whatWeCanDo = [
  {
    title: 'Digital Transformation',
    description: 'Transform your business with cutting-edge digital solutions and strategies.',
    icon: '🚀',
    gradient: 'from-primary-500 to-secondary-500'  // Updated gradient
  },
  {
    title: 'Custom Development',
    description: 'Build tailored software solutions that perfectly match your needs.',
    icon: '💻',
    gradient: 'from-blue-500 to-indigo-500'  // Updated gradient
  },
  {
    title: 'Technical Consulting',
    description: 'Expert guidance on technology decisions and implementation.',
    icon: '🎯',
    gradient: 'from-purple-500 to-pink-500'  // Updated gradient
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
  const descriptionOpacity = useTransform(scrollY, [50, 300], [0, 1]);
  const descriptionTranslateY = useTransform(scrollY, [50, 300], [100, 0]);
  const whatWeCanDoOpacity = useTransform(scrollY, [150, 400], [0, 1]);
  const whatWeCanDoTranslateY = useTransform(scrollY, [150, 400], [100, 0]);

  // mouse tracking logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 300 };
  const circleX = useSpring(mouseX, springConfig);
  const circleY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

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
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-6 select-none">
              Innovate. Transform.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Succeed.
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 max-w-2xl mx-auto select-none">
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
        className="py-24 bg-gray-50 relative z-10"
      >
        <motion.div 
          className="container mx-auto px-6"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            onMouseMove={handleMouseMove}
            className="xl:w-2/3 lg:w-3/4 w-full mx-auto relative overflow-hidden rounded-3xl bg-white shadow-2xl"
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5" />

            {/* Multiple floating circles */}
            <motion.div
              className="pointer-events-none absolute w-56 h-56 rounded-full bg-primary-500/10 blur-3xl"
              style={{
                x: circleX,
                y: circleY,
                translateX: '-50%',
                translateY: '-50%'
              }}
            />
            <motion.div
              className="pointer-events-none absolute w-32 h-32 rounded-full bg-secondary-500/20 blur-2xl"
              style={{
                x: circleX,
                y: circleY,
                translateX: '0%',
                translateY: '0%'
              }}
            />

            <div className="relative text-center p-12">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                className="inline-block w-12 h-12 text-primary-400 mb-8" 
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <div className="">
                <h2 className="text-gray-900 font-bold tracking-wider text-2xl">Why Imprezit</h2>
                <p className="text-gray-600 mt-2">Transforming Ideas into Reality</p>
                <span className="inline-block h-1 w-16 rounded bg-primary-500 mb-4 mt-4"></span>
              </div>
              <motion.div className="relative z-10 space-y-6">
                <p className="text-3xl text-gray-700 leading-relaxed">
                  At ImprezIT, we specialize in creating innovative digital solutions that help businesses thrive in the modern world. Our team of experts combines creativity with technical excellence to deliver outstanding results.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  With years of experience and a passion for technology, we're committed to helping our clients achieve their digital transformation goals.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* What We Can Do Section */}
      <motion.section
        style={{ opacity: whatWeCanDoOpacity, y: whatWeCanDoTranslateY }}
        className="py-40 bg-gray-50 relative z-10"
      >
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-9xl font-bold text-center text-gray-900 mb-20"
          >
            What We Can Do
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-52">
            {whatWeCanDo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <motion.div
                  className="w-[32rem] h-[32rem] rounded-full flex flex-col items-center justify-center p-16 text-center bg-white relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Gradient overlay that fills from bottom */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient}
                    transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out`}
                  />
                  
                  {/* Content container */}
                  <div className="relative z-10">
                    <span className="text-8xl mb-10 text-gray-800 group-hover:text-white transition-colors duration-500">
                      {item.icon}
                    </span>
                    <h3 className={`pt-16 text-4xl font-bold mb-8 bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent
                      group-hover:text-white transition-colors duration-500`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xl text-gray-600 group-hover:text-white transition-colors duration-500 max-w-[320px]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
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
          <h2 className="text-9xl font-bold text-center mb-20">Highlights</h2>
          <div className="grid grid-cols-2 gap-6 auto-rows-[150px]">
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