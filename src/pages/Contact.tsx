import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Particles } from '../components/Particles';
import { useState } from 'react';

const contactMessages = [
  {
    text: 'Ready to unlock your business potential in this digital transformation era?',
    delay: 0.3
  },
  {
    text: 'We\'re here to help you achieve your digital aspirations.',
    delay: 0.4
  },
  {
    text: 'Transform your ideas into impactful digital solutions.',
    delay: 0.5
  }
];

const messageCategories = [
  "Website Development",
  "Mobile App Development",
  "Custom Solution Development",
  "Business Digitization",
  "Consultation or Mentoring",
  "Partnerships",
  "Other"
];

const Contact = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 300 };
  const circleX = useSpring(mouseX, springConfig);
  const circleY = useSpring(mouseY, springConfig);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div className="min-h-screen pt-40 lg:pt-48 pb-16 bg-gray-50 relative">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0">
        <Particles />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto bg-black rounded-3xl shadow-2xl overflow-hidden mt-8 lg:mt-12"
        >
          <div className="grid md:grid-cols-12 min-h-[700px] bg-gray-50">
            {/* Left Side - Info */}
            <div className="md:col-span-5 relative px-6 py-10 lg:p-14 text-black flex flex-col justify-between">
              <div className="relative z-10">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-4xl lg:text-6xl font-bold mb-12 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent leading-tight"
                >
                  Let's Connect
                </motion.h2>
                
                <div className="space-y-8">
                  {contactMessages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: message.delay }}
                      className="flex items-start gap-5"
                    >
                      <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-primary-500 mt-3"></span>
                      <p className="text-lg lg:text-xl leading-relaxed text-gray-700 font-medium">
                        {message.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Form Card */}
            <div className="md:col-span-7 lg:p-14 bg-gray-50">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onMouseMove={handleMouseMove}
                className="bg-white rounded-2xl shadow-lg pt max-w-2xl mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 relative overflow-hidden"
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
                  <div className="p-6 lg:p-10 space-y-8">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-16 px-8"
                      >
                        <div className="space-y-8">
                          <svg className="w-16 h-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M5 13l4 4L19 7" 
                            />
                          </svg>
                          <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-white">Thank you for reaching out!</h3>
                            <p className="text-xl text-white/90 max-w-md mx-auto">
                              We're excited to connect with you and will get back to you soon.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <>
                        <h3 className="text-2xl font-semibold text-white mb-8">
                          Send us a message
                        </h3>
                        <motion.form 
                          onSubmit={(e) => {
                            e.preventDefault();
                            setIsSubmitted(true);
                          }}
                          className="space-y-6"
                        >
                          <div className="space-y-5">
                            {[
                              { label: "Name", type: "text", placeholder: "Your name" },
                              { label: "Email", type: "email", placeholder: "your@email.com" },
                              { label: "Phone (Optional)", type: "tel", placeholder: "Phone number" }
                            ].map((field) => (
                              <div key={field.label} className="space-y-2">
                                <label className="text-sm font-medium text-white">
                                  {field.label}
                                </label>
                                <input
                                  type={field.type}
                                  className="w-full px-4 py-2.5 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                                  placeholder={field.placeholder}
                                />
                              </div>
                            ))}

                            <div className="space-y-2">
                              <label className="text-sm font-medium text-white">
                                What is your message about?
                              </label>
                              <select className="w-full px-4 py-2.5 rounded-lg border border-white/20 
                                bg-white/10 text-white focus:ring-2 focus:ring-white/30 
                                focus:border-transparent transition-all backdrop-blur-sm
                                [&>option]:bg-primary-500 [&>option]:text-white
                                appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA2TDggMTBMMTIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=')] 
                                bg-no-repeat bg-[center_right_1rem]"
                              >
                                <option value="" disabled selected className="text-white bg-primary-600/90">
                                  Select a category
                                </option>
                                {messageCategories.map(category => (
                                  <option 
                                    key={category} 
                                    value={category} 
                                    className="text-white bg-primary-600/90 backdrop-blur-sm"
                                  >
                                    {category}
                                  </option>
                                ))}
                              </select>
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm font-medium text-white">
                                What are you planning to build?
                              </label>
                              <textarea
                                rows={5}
                                className="w-full px-4 py-2.5 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all resize-none"
                                placeholder="Tell us about your project..."
                              ></textarea>
                            </div>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3 rounded-lg font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
                            type="submit"
                          >
                            Send Message
                          </motion.button>
                        </motion.form>
                      </>
                    )}
                  </div>
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