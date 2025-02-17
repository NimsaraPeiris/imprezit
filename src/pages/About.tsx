import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Footer } from '../components/Footer';
import { useState, useEffect } from 'react';

const awards = [
  {
    title: "Innovation Excellence Award 2024",
    organization: "Tech Innovation Forum",
    year: "2024"
  },
  {
    title: "Best Startup of the Year",
    organization: "Startup Awards",
    year: "2023"
  },
  {
    title: "Customer Satisfaction Excellence",
    organization: "Business Standards Institute",
    year: "2023"
  }
];

const certifications = [
  {
    title: "ISO 27001 Certification",
    description: "Information Security Management",
    year: "2024"
  },
  {
    title: "ISO 9001:2015",
    description: "Quality Management Systems",
    year: "2023"
  }
];

const achievements = [
  {
    title: 'Projects Delivered',
    value: '200+',
    description: 'Successful implementations',
    color: 'from-blue-500 to-cyan-500',
    span: 'col-span-2'
  },
  {
    title: 'Client Satisfaction',
    value: '98%',
    description: 'Happy customers',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Team Growth',
    value: '300%',
    description: 'Year over year',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Global Presence',
    value: '15+',
    description: 'Countries served',
    color: 'from-orange-500 to-red-500',
    span: 'col-span-2'
  }
];

const blogs = [
  {
      id: 1,
      title: '1st Runner Up at the Alliance of Masterminds Hackathon',
      author: 'Michael Jordan',
      date: '00.00.2024',
      image: './public/images/achivements/1st-RUP-G_ALFA.jpg',
      avatar: 'https://i.pravatar.cc/150?img=1',
      link: '/',
  },
  {
      id: 2,
      title: 'soon',
      author: 'Jane Doe',
      date: '02.03.2024',
      image: './public/images/achivements/1st-RUP-INSL.jpeg',
      avatar: 'https://i.pravatar.cc/150?img=2',
      link: '/',
  },
  {
      id: 3,
      title: 'IdeaniX winners by IEEE SLTC',
      author: 'John Smith',
      date: '18.03.2021',
      image: './public/images/achivements/Winners-IDEANIX.jpeg',
      avatar: 'https://i.pravatar.cc/150?img=3',
      link: '/',
  },
  {
      id: 4,
      title: 'Unipreneur\'s Impact Challenge Finalists',
      author: 'Alice Johnson',
      date: '24.12.2024',
      image: './public/images/achivements/Palladian.png',
      avatar: 'https://i.pravatar.cc/150?img=4',
      link: '/',
  },
  {
      id: 5,
      title: '1st runner-up at IEEE INSL',
      author: 'Robert Brown',
      date: '02.11.2024',
      image: './public/images/achivements/1st-RUP-INSL.jpeg',
      avatar: 'https://i.pravatar.cc/150?img=5',
      link: '/',
  },
  {
      id: 6,
      title: 'soon',
      author: 'Robert Brown',
      date: '02.11.2024',
      image: './public/images/achivements/1st-RUP-G_ALFA.jpg',
      avatar: 'https://i.pravatar.cc/150?img=5',
      link: '/',
  },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="pt-0"> {/* Changed from pt-60 to pt-0 */}
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl font-bold text-gray-900 mb-8">
              Learn More About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Imprezit
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a forward-thinking startup dedicated to transforming businesses
              through innovative technology solutions. Our mission is to empower
              organizations to thrive in the digital age.
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

      <div className="container mx-auto">

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center pt-20">Our Mission</h2>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Vision</h3>
              <p className="text-gray-600">
                To be the leading force in digital innovation, transforming businesses 
                through cutting-edge technology solutions that drive growth and success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-primary-600 mb-4">Strategy</h3>
              <p className="text-gray-600">
                Delivering innovative solutions through agile methodologies and 
                maintaining strong partnerships with industry leaders.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-md col-span-2"
          >
            <h3 className="text-xl font-semibold text-primary-600 mb-4">Implementation</h3>
            <p className="text-gray-600">
              We execute our vision through a combination of cutting-edge technologies, 
              expert team collaboration, and a deep understanding of business needs. 
              Our approach ensures successful digital transformation while maintaining 
              the highest standards of quality and security.
            </p>
          </motion.div>
        </motion.section>

        {/* Achievements Bento Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Achievements</h2>
          <div className="grid grid-cols-4 gap-6 auto-rows-[180px]">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-3xl p-8 bg-gradient-to-r ${item.color} ${item.span || ''} text-white shadow-lg`}
              >
                <h3 className="text-3xl font-bold mb-2">{item.value}</h3>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-sm opacity-90">{item.description}</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Recent Achievements</h2>
          {mounted && (
            <div className="grid max-h-screen h-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 gap-16 w-full max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8">
              {blogs.map((blog, index) => (
                <motion.a
                  key={blog.id}
                  href={blog.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group relative flex overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02] min-h-[280px] ${
                    index === 0
                      ? 'md:col-span-2 md:row-span-2'
                      : index === 1
                        ? 'md:col-span-1 md:row-span-1'
                        : 'md:col-span-1 md:row-span-1 lg:row-span-2'
                  }`}
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute transition-all duration-300 group-hover:scale-110 group-hover:opacity-50 object-cover w-full h-full"
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