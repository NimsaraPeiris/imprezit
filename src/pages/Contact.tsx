import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

const messageCategories = [
  "Website Development",
  "Mobile App Development",
  "Custom Solution Development",
  "Business Digitization",
  "Consultation or Mentoring",
  "Partnerships",
  "Other"
];

// Define a type for form data to ensure type safety
type FormData = {
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
};

const Contact = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 300 };
  const circleX = useSpring(mouseX, springConfig);
  const circleY = useSpring(mouseY, springConfig);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false); // State to track the sending animation

  // Use FormData type for the state to ensure type safety
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value || '',
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const emailMessage = `
      Name: ${formData.name}\n
      Email: ${formData.email}\n
      Phone: ${formData.phone}\n
      What is your message about: ${formData.category}\n
      What are you planning to build: ${formData.message}
    `;

    const emailParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      category: formData.category,
      message: emailMessage
    };

    emailjs.send('service_6c9721f', 'template_euih9gi', emailParams, 'ChIVjiQVOL0ar3dr9')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text, emailParams);
        setIsSubmitted(true);
        setIsSending(false);
      }, (err) => {
        console.error('FAILED...', err);
        setIsSending(false);
      });
  };

  return (
    <div className="min-h-screen pt-20 md:pt-28 lg:pt-32 pb-16 bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Main grid container */}
          <div className="grid md:grid-cols-2 gap-8 py-16 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="relative flex flex-col justify-center h-full p-8 lg:p-12">
              <div className="max-w-xl mx-auto space-y-8">
                <div className="text-center md:text-left">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-6xl lg:text-8xl font-bold text-gray-900 leading-tight"
                  >
                    Let's
                  </motion.h2>
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-4xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight"
                  >
                    Connect
                  </motion.h2>
                </div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-lg md:text-xl text-gray-800 bg-white shadow-lg rounded-3xl p-8"
                >
                  Ready to unlock your business potential in this digital transformation era?
                  With innovative technology solutions, mentoring, and expert guidance,
                  we're here to help you achieve your digital aspirations and thrive in a rapidly evolving landscape.
                </motion.p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onMouseMove={handleMouseMove}
                className="rounded-2xl shadow-lg bg-gray-800 relative overflow-hidden"
              >
                <motion.div
                  className="pointer-events-none absolute w-32 h-32 rounded-full bg-white/20 blur-xl"
                  style={{
                    x: circleX,
                    y: circleY,
                    translateX: '-50%',
                    translateY: '-50%'
                  }}
                />

                <div className="relative z-10 p-6 lg:p-10">
                  {isSubmitted ? (
                    <div className="py-16 px-8 flex justify-center items-center h-full">
                      <div className="space-y-8 text-center">
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
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl text-center font-semibold text-white mb-8">
                        Send us a message
                      </h3>
                      <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        <div className="space-y-5 text-2xl">
                          {[
                            { label: "Name", type: "text", placeholder: "Enter Name", required: true },
                            { label: "Email", type: "email", placeholder: "Enter E-Mail Address", required: true },
                            { label: "Phone", type: "tel", placeholder: "Enter Phone Number", required: true }
                          ].map((field) => (
                            <div key={field.label} className="space-y-2">
                              <label className="text-sm font-medium text-white">
                                {field.label}
                              </label>
                              <input
                                type={field.type}
                                name={field.label.toLowerCase().replace(/ /g, '') as keyof FormData} // Type-safe key
                                className="w-full px-4 py-2.5 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all"
                                placeholder={field.placeholder}
                                value={formData[field.label.toLowerCase().replace(/ /g, '') as keyof FormData]} // Ensuring value is controlled
                                onChange={handleChange}
                                required={field.required} // Add required here
                              />
                            </div>
                          ))}
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-white">
                              What is your message about?
                            </label>
                            <select
                              name="category"
                              className="w-full px-4 py-2.5 rounded-lg border border-white/20 
                              bg-white/10 text-white focus:ring-2 focus:ring-white/30 
                              focus:border-transparent transition-all backdrop-blur-sm
                              [&>option]:bg-gray-600 [&>option]:text-white
                              appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA2TDggMTBMMTIgNiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=')] 
                              bg-no-repeat bg-[center_right_1rem]"
                              value={formData.category} // Ensure value is controlled
                              onChange={handleChange}
                            >
                              <option value="" disabled className="text-white bg-black">
                                Select
                              </option>
                              {messageCategories.map(category => (
                                <option
                                  key={category}
                                  value={category}
                                  className="text-white bg-black backdrop-blur-sm"
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
                              name="message"
                              rows={5}
                              className="w-full px-4 py-2.5 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all resize-none"
                              placeholder="Tell us about your project..."
                              value={formData.message} // Ensure value is controlled
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3 rounded-lg text-2xl text-black bg-white hover:bg-white/20 border border-white/20 transition-all duration-300 relative"
                          type="submit"
                        >
                          {isSending ? (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <svg
                                className="w-8 h-8 text-white animate-spin"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 4v1m0 14v1m-7-7h1m14 0h1m-1.4 5.6l-.6-.8m-13.2 0l-.6.8m12-12l-.6-.8M6.4 4.4l-.6.8M21 12a9 9 0 10-9 9 9 0 0 0 9-9z"
                                />
                              </svg>
                            </div>
                          ) : (
                            "Send Message"
                          )}
                        </motion.button>
                      </motion.form>
                    </>
                  )}
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