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
    span: 'row-span-2'
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security measures and protocols',
    color: 'from-yellow-500 to-orange-500'
  }
];

const whatWeCanDo = [
  {
    title: 'Digital Transformation',
    description: 'Transform your business with cutting-edge digital solutions and strategies.',
    icon: '🚀',
    baseTheme: 'from-blue-400 to-blue-600',
    hoverTheme: 'from-primary-400 to-primary-600'
  },
  {
    title: 'Custom Development',
    description: 'Build tailored software solutions that perfectly match your needs.',
    icon: '💻',
    baseTheme: 'from-primary-400 to-primary-600',
    hoverTheme: 'from-secondary-400 to-secondary-600'
  },
  {
    title: 'Technical Consulting',
    description: 'Expert guidance on technology decisions and implementation.',
    icon: '🎯',
    baseTheme: 'from-secondary-400 to-secondary-600',
    hoverTheme: 'from-blue-400 to-blue-600'
  }
];

const footerContent = {
  companyInfo: {
    description: 'ImprezIT delivers innovative digital solutions to transform businesses for the modern age.',
    social: [
      { name: 'LinkedIn', url: '#', icon: '🔗' },
      { name: 'Twitter', url: '#', icon: '🐦' },
      { name: 'GitHub', url: '#', icon: '💻' }
    ]
  },
  quickLinks: [
    { name: 'About Us', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'Projects', url: '/projects' },
    { name: 'Contact', url: '/contact' }
  ],
  services: [
    { name: 'Web Development', url: '/services/web' },
    { name: 'Mobile Apps', url: '/services/mobile' },
    { name: 'Cloud Solutions', url: '/services/cloud' },
    { name: 'AI Integration', url: '/services/ai' }
  ],
  contact: {
    address: '123 Tech Street, Digital City, 12345',
    email: 'contact@imprezit.com',
    phone: '+1 (555) 123-4567'
  }
};

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

  // Add mouse tracking logic
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
              
              <motion.div className="relative z-10 space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  At ImprezIT, we specialize in creating innovative digital solutions that help businesses thrive in the modern world. Our team of experts combines creativity with technical excellence to deliver outstanding results.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  With years of experience and a passion for technology, we're committed to helping our clients achieve their digital transformation goals.
                </p>
              </motion.div>

              <div className="mt-8">
                <span className="inline-block h-1 w-16 rounded bg-primary-500 mb-6"></span>
                <h2 className="text-gray-900 font-bold tracking-wider text-2xl">Why Imprezit</h2>
                <p className="text-gray-600 mt-2">Transforming Ideas into Reality</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* What We Can Do Section - Updated */}
      <motion.section
        style={{ opacity: whatWeCanDoOpacity, y: whatWeCanDoTranslateY }}
        className="py-32 bg-gray-50 relative z-10"
      >
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-gray-900 mb-24"
          >
            What We Can Do
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-16">
            {whatWeCanDo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  className={`w-80 h-80 rounded-full flex flex-col items-center justify-center p-12 text-center text-white transition-all duration-500 bg-gradient-to-br ${item.baseTheme} group-hover:${item.hoverTheme} shadow-lg group-hover:shadow-2xl`}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-6xl mb-6">{item.icon}</span>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-sm opacity-90 max-w-[200px]">
                    {item.description}
                  </p>
                </motion.div>
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-full border-2 border-dashed border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
          <h2 className="text-4xl font-bold text-center mb-12">Highlights</h2>
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

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;