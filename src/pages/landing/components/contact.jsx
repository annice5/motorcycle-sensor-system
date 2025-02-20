import { motion } from "framer-motion";
import contact from "../../../assets/contact.jpg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6 sm:px-12 md:px-20"
      style={{ backgroundImage: `url(${contact})` }}
    >
      {/* Background Overlay */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
      />

      {/* Content Container */}
      <motion.div
        className="relative text-white flex flex-col items-start text-left px-4 sm:px-8 max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-[#c29849] self-center sm:self-start"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base mt-2 self-center sm:self-start"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Have any questions? Feel free to reach out to us!
        </motion.p>

        {/* Contact Information */}
        <motion.div
          className="mt-6 space-y-4 text-sm sm:text-base self-center sm:self-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <p><strong>Email:</strong> contact@motorbiketech.com</p>
          <p><strong>Phone:</strong> +233 123 456 789</p>
          <p><strong>Address:</strong> Berekum East, Bono Region</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
