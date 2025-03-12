import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Footer } from '../components/Footer';
import { useState, useEffect, useCallback } from 'react';

const blogs = [
  {
    id: 1,
    title: '1st Runner Up at the Alliance of Masterminds Hackathon',
    // author: 'Michael Jordan',
    date: '00.00.2024',
    image: '/images/achivements/1st-RUP-G_ALFA.jpg',
    // avatar: 'https://i.pravatar.cc/150?img=1',
    link: '/',
  },
  {
    id: 2,
    title: '1st runner-up at IEEE INSL',
    // author: 'Jane Doe',
    date: '02.03.2024',
    image: '/images/achivements/1st-RUP-INSL.jpeg',
    // avatar: 'https://i.pravatar.cc/150?img=2',
    link: '/',
  },
  {
    id: 3,
    title: 'IdeaniX winners by IEEE SLTC',
    // author: 'John Smith',
    date: '18.03.2021',
    image: '/images/achivements/Winners-IDEANIX.jpeg',
    // avatar: 'https://i.pravatar.cc/150?img=3',
    link: '/',
  },
  {
    id: 4,
    title: 'Unipreneur\'s Impact Challenge Finalists',
    // author: 'Alice Johnson',
    date: '24.12.2024',
    image: '/images/achivements/Palladian.png',
    // avatar: 'https://i.pravatar.cc/150?img=4',
    link: '/',
  },
];

const pillars = [
  {
    title: 'Innovation',
    icon: '🚀',
    description: 'Innovation is at our core. We drive it through continuous research and development, exploring new technologies and ideas to develop innovative solutions that not only stay ahead of the curve but also address real-world challenges, unlock new opportunities, and empower individuals and communities to thrive in a rapidly evolving digital landscape.',
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Technical Expertise',
    icon: '💻',
    description: 'Our team possesses extensive technical expertise across a wide range of domains, including artificial intelligence (AI), machine learning (ML), web and mobile development, blockchain, cloud computing, and data analytics. We leverage these advanced technologies to deliver high-quality, innovative solutions tailored to solve complex challenges and drive success in the digital era.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Business Digitalization',
    icon: '📈',
    description: 'We help businesses thrive in the digital age by transforming and automating day-to-day operations, improving workflows, and delivering tailored digital solutions. With a focus on strategic alignment, we ensure that our digitalization efforts not only enhance efficiency but also drive meaningful impact, foster innovation, and support long-term growth, ultimately positioning our clients for sustained success in an ever-evolving digital landscape',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Consultation',
    icon: '🤝',
    description: 'Our team offers comprehensive strategic guidance, providing both business and technical consultations to help clients make informed decisions, drive growth, and achieve their digital goals. Whether it\'s optimizing operations or leveraging technology for competitive advantage, we deliver tailored advice that empowers businesses to thrive in the digital era.',
    gradient: 'from-yellow-500 to-orange-500'
  }
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroTranslateY = useTransform(scrollY, [0, 300], [0, -100]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.5]);

  const [_, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mounted, setMounted] = useState(false);

  const [, setScrollYState] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollYState(window.scrollY);
  }, []);

  useEffect(() => {
    setMounted(true);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="pt-0 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        style={{
          opacity: heroOpacity,
          y: heroTranslateY,
          scale: heroScale,
          transformOrigin: 'center center'
        }}
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

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Text Content */}
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 
                  bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  Overview
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed">
                  <b>Imprezit</b> is a dynamic team of innovators dedicated to pushing the boundaries
                  of technology and shaping the digital future. Through expertise in development,
                  artificial intelligence, digitization, and consulting, we craft cutting-edge
                  solutions that empower individuals and industries alike. With a passion for
                  driving progress, we aim to create meaningful impacts on how people live,
                  work, and connect in an ever-evolving digital world.
                </p>
              </div>

              {/* Image Grid */}
              <div className="relative p-6 md:p-10">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-4 md:space-y-6">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg 
                      group transition-all duration-300 hover:shadow-xl">
                      <img
                        className="w-full h-[200px] md:h-[300px] object-cover 
                        transform transition-transform duration-300 group-hover:scale-110"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                        alt="office environment"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 
                        transition-opacity duration-300"/>
                    </div>
                  </div>
                  <div className="space-y-4 md:space-y-6 mt-8">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg 
                      group transition-all duration-300 hover:shadow-xl">
                      <img
                        className="w-full h-[200px] md:h-[300px] object-cover 
                        transform transition-transform duration-300 group-hover:scale-110"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                        alt="office meeting room"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 
                        transition-opacity duration-300"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 pt-20"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-white flex items-center justify-center">
                  <h2 className="items-center text-5xl lg:text-6xl font-bold">Our Mission</h2>
                </div>
                <div className="p-6">
                  <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-justify text-justify">
                    Driving innovation and shaping a brighter digital future, where technology transforms lives and fosters meaningful connections across the globe.
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
                  {/* <span className="text-4xl">{pillar.icon}</span> */}
                  <h3 className="text-2xl font-bold lg:text-3xl text-white mb-8 mx-auto select-none">{pillar.title}</h3>
                </div>
                <div className="p-8">
                  <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">{pillar.description}</p>
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
                    ? 'md:col-span-1 md:row-span-1'
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