import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Footer } from '../components/Footer';
import { useState, useEffect, useCallback } from 'react';

const blogs = [
  {
    id: 1,
    title: '1st Runner Up at the Alliance of Masterminds Hackathon',
    // author: 'Michael Jordan',
    date: '00.00.2024',
    image: './public/images/achivements/1st-RUP-G_ALFA.jpg',
    // avatar: 'https://i.pravatar.cc/150?img=1',
    link: '/',
  },
  {
    id: 2,
    title: '1st runner-up at IEEE INSL',
    // author: 'Jane Doe',
    date: '02.03.2024',
    image: './public/images/achivements/1st-RUP-INSL.jpeg',
    // avatar: 'https://i.pravatar.cc/150?img=2',
    link: '/',
  },
  {
    id: 3,
    title: 'IdeaniX winners by IEEE SLTC',
    // author: 'John Smith',
    date: '18.03.2021',
    image: './public/images/achivements/Winners-IDEANIX.jpeg',
    // avatar: 'https://i.pravatar.cc/150?img=3',
    link: '/',
  },
  {
    id: 4,
    title: 'Unipreneur\'s Impact Challenge Finalists',
    // author: 'Alice Johnson',
    date: '24.12.2024',
    image: './public/images/achivements/Palladian.png',
    // avatar: 'https://i.pravatar.cc/150?img=4',
    link: '/',
  },
];

const pillars = [
  {
    title: 'Innovation',
    icon: '🚀',
    description: 'Innovation is at our core. We drive it through continuous research and development...',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Technical Expertise',
    icon: '💻',
    description: 'Our team possesses extensive technical expertise across a wide range of domains...',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Business Digitalization',
    icon: '📈',
    description: 'We help businesses thrive in the digital age by transforming and automating day-to-day operations...',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Consultation',
    icon: '🤝',
    description: 'Our team offers comprehensive strategic guidance, providing both business and technical consultations...',
    gradient: 'from-yellow-500 to-orange-500'
  }
];

const About = () => {
  const [_, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mounted, setMounted] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    setMounted(true);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const opacity = 1 - Math.min(scrollY / 500, 1); // reduces opacity as you scroll
  const scale = 1 + Math.min(scrollY / 1000, 0.2); // increases scale as you scroll

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: opacity < 0 ? 0 : opacity }}
        transition={{ duration: 0.8 }}
        className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mx-auto"
          >
            <h1 className="md:text-8xl text-3xl font-bold text-gray-900 mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Learn More About 
              Imprezit
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 mx-auto select-none">
            Together, we drive innovation to enable success in the digital era.

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

      <section className="bg-gray-200">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="sm:text-lg text-gray-800">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Overview</h2>
            <p className="mb-4 text-2xl text-gray-600 leading-relaxed">Imprezit is a dynamic team of innovators dedicated to pushing the boundaries of technology...</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 hover:opacity-70 transition-opacity duration-300">
            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
          </div>
        </div>
      </section>
      <div className="container mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-32 pt-20"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-gradient-to-br from-primary-500 to-secondary-500 text-white flex items-center justify-center">
                  <h2 className="text-6xl font-bold mb-6">Our Mission</h2>
                </div>
                <div className="p-12">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Driving innovation and shaping a brighter digital future...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center px-6"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Our Expertise
            </h2>
          </div>
        </motion.section>

        {/* Pillars Section - New */}
        <motion.section className="mb-32 px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className={`p-8 bg-gradient-to-r ${pillar.gradient}`}>
                  <span className="text-4xl">{pillar.icon}</span>
                  <h3 className="text-2xl font-bold text-white mt-4">{pillar.title}</h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 font-bold leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Awards Bento Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 py-20"
        >
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center px-6"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Recent Achievements
              </h2>
            </div>
          </motion.section>
          {mounted && (
            <div className="grid max-h-screen h-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 gap-16 w-full max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8">
              {blogs.map((blog, index) => (
                <motion.a
                  key={blog.id}
                  href={blog.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative flex overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] min-h-[280px] ${index === 0
                    ? 'md:col-span-2 md:row-span-2'
                    : index === 1
                      ? 'md:col-span-1 md:row-span-1'
                      : 'md:col-span-1 md:row-span-1 lg:row-span-2'
                    }`}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="relative flex h-full w-full flex-col justify-end p-6 text-white">
                    <h2 className="mb-2 text-2xl font-bold leading-tight">{blog.title}</h2>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-300">{blog.date}</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 p-8 rounded-lg"
        >
        </motion.section>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default About;