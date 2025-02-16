import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Digital Transformation",
      description: "Modernize your business with cutting-edge digital solutions",
      features: [
        "Legacy System Modernization",
        "Cloud Migration",
        "Process Automation",
        "Digital Strategy Consulting"
      ]
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions to meet your unique needs",
      features: [
        "Web Applications",
        "Mobile Apps",
        "Enterprise Software",
        "API Integration"
      ]
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights",
      features: [
        "Business Intelligence",
        "Predictive Analytics",
        "Data Visualization",
        "Real-time Analytics"
      ]
    }
  ];

  return (
    <div className="pt-60">
      <div className="container mx-auto px-4">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </motion.section>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;