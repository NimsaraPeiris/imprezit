import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  return (
    <div className="pt-60">
      <div className="container mx-auto px-4">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            We are a forward-thinking startup dedicated to transforming businesses
            through innovative technology solutions. Our mission is to empower
            organizations to thrive in the digital age.
          </p>
        </motion.section>

        <section ref={ref} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-primary-600 mb-2">
                  {award.title}
                </h3>
                <p className="text-gray-600">{award.organization}</p>
                <p className="text-sm text-gray-500">{award.year}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary-500"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600">{cert.description}</p>
                <p className="text-sm text-gray-500 mt-2">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Innovation",
                description: "Pushing boundaries and embracing new technologies"
              },
              {
                title: "Excellence",
                description: "Delivering outstanding results in everything we do"
              },
              {
                title: "Integrity",
                description: "Building trust through honest and ethical practices"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;