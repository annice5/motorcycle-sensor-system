import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";
import footer from "../../../assets/footer.jpg";

const Footer = () => {
  return (
    <section
      id="contact"
      className="relative bg-cover bg-center py-16 px-8 md:px-20 text-white"
      style={{ backgroundImage: `url(${footer})` }}
    >
      {/* Background Overlay with Gradient Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

      {/* Footer Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mt-16 p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Contact Information */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-2xl font-bold text-[#977631] flex items-center">
            <span className="bg-white text-[#977631] px-2 rounded-full">M</span>
            <span className="ml-0 relative z-10  ">otorbike Tech</span>
          </h1>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-xl font-bold text-[#c29849]">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            {["Home", "About", "Services", "Contact"].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, color: "#c29849" }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#c29849] transition-all duration-300"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <h2 className="text-xl font-bold text-[#c29849]">Follow Us</h2>
          <div className="flex justify-center md:justify-start mt-3 space-x-6">
            {[
              { platform: "Instagram", icon: <Instagram />, url: "#" },
             
              { platform: "YouTube", icon: <Youtube />, url: "#" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
                className="hover:text-[#c29849] text-gray-300 text-2xl"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Copyright Section */}
      <motion.div
        className="relative z-10 mt-10 text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
          All Rights Reserved.&copy; {new Date().getFullYear()}
      </motion.div>
    </section>
  );
};

export default Footer;
