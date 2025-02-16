import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Footer } from '../components/Footer';


const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <div className="pt-60">
      <div className="container mx-auto">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Learn More About Imprezit</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are a forward-thinking startup dedicated to transforming businesses
            through innovative technology solutions. Our mission is to empower
            organizations to thrive in the digital age.
          </p>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Mission</h2>
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