import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Particles } from '../components/Particles';
import { Footer } from '../components/Footer';

const whatWeCanDo = [
  {
    title: 'Digital Transformation',
    description: 'Elevate your business with innovative digital solutions and strategies that drive success.',
    icon: '🚀',
    gradient: 'from-primary-500 to-secondary-500'  // Updated gradient
  },
  {
    title: 'Custom Development',
    description: 'Create tailored software solutions that align perfectly with your unique vision.',
    icon: '💻',
    gradient: 'from-blue-500 to-indigo-500'  // Updated gradient
  },
  {
    title: 'Technical & Business Consulting',
    description: 'Gain expert guidance on technology decisions and implementation for seamless success.',
    icon: '🎯',
    gradient: 'from-purple-500 to-pink-500'  // Updated gradient
  }
];

const blogs = [
  {
    id: 1,
    title: '1st Runner Up at the Alliance of Masterminds Hackathon',
    // author: 'Michael Jordan',
    date: '00.00.2024',
    image: '/images/achivements/gen2.jpeg',
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
  {
    id: 5,
    title: '1st runner-up at IEEE INSL',
    // author: 'Robert Brown',
    date: '02.11.2024',
    image: '/images/achivements/1st-RUP-G_ALFA.jpg',
    // avatar: 'https://i.pravatar.cc/150?img=5',
    link: '/',
  },
  {
    id: 6,
    title: 'soon',
    // author: 'Robert Brown',
    date: '02.11.2024',
    image: '/images/achivements/y1.jpeg',
    // avatar: 'https://i.pravatar.cc/150?img=5',
    link: '/',
  },
];



const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroTranslateY = useTransform(scrollY, [0, 300], [0, -100]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.5]);
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
            style={{ scale: heroScale }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-6 select-none">
              Innovate. Transform.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                Disrupt.
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 mx-auto select-none">
              Revolutionizing the world with cutting-edge solutions for a digital future.
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
        className="py-12 sm:py-16 lg:py-24 bg-gray-50 relative z-10"
      >
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            onMouseMove={handleMouseMove}
            className="w-full max-w-5xl mx-auto relative overflow-hidden rounded-3xl bg-white shadow-2xl"
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

            <div className="relative text-center p-6 sm:p-8 lg:p-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary-400 mb-6 sm:mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-wide">
                  Why Imprezit
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600">
                  Transforming Ideas into Reality
                </p>
                <div className="flex justify-center">
                  <span className="inline-block h-1 w-16 rounded bg-primary-500 my-4"></span>
                </div>
              </div>
              <motion.div className="relative z-10 max-w-4xl mx-auto">
                <div className="space-y-6 sm:space-y-8">
                  <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-bold">
                    "At Imprezit, we craft cutting-edge digital solutions that empower the world to thrive in a rapidly evolving landscape. By blending creativity with technical brilliance, we transform bold ideas into impactful realities."
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed italic">
                    The future isn't just imagined, it's imprez'd into reality. Let's create it together
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* What We Can Do Section */}
      <motion.section
        style={{ opacity: whatWeCanDoOpacity, y: whatWeCanDoTranslateY }}
        className="py-20 lg:py-32 bg-gray-50 relative z-10 overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center px-6"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Our Services
              </h2>
            </div>
          </motion.section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {whatWeCanDo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <motion.div
                  className="aspect-square rounded-3xl flex flex-col items-center justify-center p-6 sm:p-8 lg:p-10 
                            text-center bg-white relative overflow-hidden group shadow-lg hover:shadow-xl 
                            transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient}
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Content container */}
                  <div className="relative z-10 space-y-6">
                    <span className="text-5xl sm:text-6xl lg:text-7xl block transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                    <div className="space-y-4">
                      <h3 className={`text-2xl sm:text-3xl font-bold bg-gradient-to-br ${item.gradient} 
                                  bg-clip-text text-transparent group-hover:text-white transition-colors duration-300`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-600 group-hover:text-white/90 
                                transition-colors duration-300 max-w-[280px] mx-auto">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Bento Grid Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-20">

        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-8 pb-8 md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Highlights
          </h2>
        </div>
        {/* </motion.section> */}
        {(
          <div className="grid max-h-screen h-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[120rem] mx-auto px-4 sm:px-6 md:px-8">
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
                  className="absolute transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110 object-cover w-full h-full"
                />
              </motion.a>
            ))}
          </div>
        )}
      </motion.section>

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;