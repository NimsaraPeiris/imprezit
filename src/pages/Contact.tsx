import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Particles } from '../components/Particles';

const Contact = () => {
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
    <div className="min-h-screen pt-48 pb-20 bg-gray-50 relative"> {/* Reduced top padding */}
      {/* Background Particles */}
      <div className="fixed inset-0 z-0">
        <Particles />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto bg-black rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-12 min-h-[600px] bg-gray-50"> {/* Reduced min-height from 800px to 600px */}
            {/* Left Side - Info */}
            <div className="md:col-span-4 relative p-6 text-black flex flex-col justify-between"> {/* Reduced padding */}
              <div className="relative z-10">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl font-bold mb-6"
                >
                  Let's Connect
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg opacity-90 mb-8"
                >
                  Ready to transform your business with cutting-edge technology solutions? 
                  We're here to help you achieve your digital goals.
                </motion.p>
                
                <div className="space-y-6">
                  {[
                    { icon: "📍", text: "123 Innovation Street, Tech City" },
                    { icon: "📧", text: "contact@imprezit.com" },
                    { icon: "📱", text: "+1 (555) 123-4567" }
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-4"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-lg">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="relative z-10 flex space-x-4"
              >
                {['LinkedIn', 'Twitter', 'GitHub'].map(platform => (
                  <button
                    key={platform}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {platform}
                  </button>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Form Card */}
            <div className="md:col-span-8 p-6 bg-gray-50"> {/* Reduced padding */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onMouseMove={handleMouseMove}
                className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 relative overflow-hidden"
              >
                {/* Floating Circle */}
                <motion.div
                  className="pointer-events-none absolute w-32 h-32 rounded-full bg-white/20 blur-xl"
                  style={{
                    x: circleX,
                    y: circleY,
                    translateX: '-50%',
                    translateY: '-50%'
                  }}
                />

                {/* Existing content with increased z-index */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="space-y-4 text-black">
                      {[
                        { label: "Name", type: "text", placeholder: "Your name" },
                        { label: "Email", type: "email", placeholder: "your@email.com" },
                        { label: "Subject", type: "text", placeholder: "How can we help?" }
                      ].map((field) => (
                        <div key={field.label}>
                          <label className="block text-sm font-medium text-white mb-2">
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                            placeholder={field.placeholder}
                          />
                        </div>
                      ))}
                      
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Message
                        </label>
                        <textarea
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                          placeholder="Your message..."
                        ></textarea>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full text-white py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors bg-gradient-to-r from-primary-700 to-secondary-700"
                    >
                      Send Message
                    </motion.button>
                  </motion.form>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;