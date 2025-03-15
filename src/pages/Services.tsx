import { motion, useScroll, useTransform, easeOut } from 'framer-motion';
import { Footer } from '../components/Footer';
import { useEffect, useRef } from 'react';

const serviceCategories = [
  {
    icon: "💻",
    title: "Fullstack Development",
    description: "Crafting comprehensive web applications with tailored functionality to drive your business forward",
    features: [
      "Modern web technologies",
      "Scalable architecture",
      "Responsive design",
      "API integration"
    ],
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description: "Crafting intuitive and innovative mobile solutions that engage and inspire users",
    features: [
      "Native development",
      "Cross-platform solutions",
      "Real-time updates",
      "Offline capabilities"
    ],
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: "🎨",
    title: "User Experience",
    description: "Designing intuitive and engaging interfaces for enhanced user satisfaction",
    features: [
      "User-centered design",
      "Interactive prototypes",
      "Usability testing",
      "Visual design"
    ],
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    description: "Building intelligent systems to automate processes and improve decision-making",
    features: [
      "Machine learning",
      "Natural language processing",
      "Computer vision",
      "Predictive analytics"
    ],
    gradient: "from-yellow-500 to-orange-600"
  },
  {
    icon: "📈",
    title: "Business Digitization",
    description: "Transforming operations into efficient workflows that drive growth and innovation",
    features: [
      "Process automation",
      "Digital transformation",
      "Workflow optimization",
      "Data integration"
    ],
    gradient: "from-red-500 to-rose-600"
  },
  {
    icon: "🎯",
    title: "Technical & Business Consultation",
    description: "Expert guidance for development needs and strategic business growth",
    features: [
      "Technical architecture",
      "Growth consulting",
      "Technology roadmap",
      "Start-up mentoring & guiding"
    ],
    gradient: "from-cyan-500 to-blue-600"
  }
];

const Services = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const heroRef = useRef(null);
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
    <div className="pt-0 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ 
          opacity: heroOpacity,
          y: heroTranslateY,
          scale: heroScale,
          transformOrigin: 'center center',
          willChange: 'transform, opacity'
        }}
        className="min-h-[85vh] sm:min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-[95%] sm:max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mx-auto max-w-6xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Our Services
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 mx-auto max-w-3xl px-4">
              We excel in providing technology solutions, business digitalization,
              technical expertise, and strategic consultation
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </motion.section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform-gpu hover:scale-[1.02]"
              >
                <div className={`p-8 bg-gradient-to-r ${service.gradient} transition-colors duration-300 min-h-[240px]`}>
                  <span className="text-5xl mb-4 block">{service.icon}</span>
                  <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-1xl lg:text-2xl text-white/90">{service.description}</p>
                </div>
                <div className="p-8 min-h-[200px]">
                  <ul className="space-y-3 text-1xl lg:text-2xl font-bold">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <svg
                          className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Services;
