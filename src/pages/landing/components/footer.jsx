import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import footer from "../../../assets/footer.jpg";
import logoImage from "../../../assets/logo.png"; // Import your logo image

const Footer = () => {
  const { ref, inView } = useInView({ threshold: 0.2,  });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative bg-cover bg-center py-12 px-6 sm:px-12 md:px-20 text-white"
      style={{ backgroundImage: `url(${footer})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

      {/* Footer Content */}
      <motion.div
  className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left mt-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg"
  initial={{ opacity: 0, y: 50 }}
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 1, delay: 0.2 }}
>
  {/* Contact Information (Left) */}
  <motion.div
    className="flex flex-col justify-center sm:justify-start items-center sm:items-start text-center sm:text-left"
    initial={{ opacity: 0, x: -50 }}
    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    {/* Smaller Logo */}
    <img src={logoImage} alt="Motorbike Tech Logo" className="w-24 h-auto" />

    {/* Brief Description */}
    <p className="text-gray-300 mt-2 text-xs sm:text-sm leading-snug max-w-xs font-light">
      Smart sensor technology ensuring motorcycles start only when the stand is retracted.
    </p>
  </motion.div>

  {/* Quick Links (Centered) */}
  <motion.div
    className="space-y-3 flex flex-col items-center"
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    <h2 className="text-xl font-bold text-[#c29849]">Quick Links</h2>
    <ul className="mt-2 space-y-2 font-light">
      {["Home", "About", "Service",  "Contact"].map((item, index) => (
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

  {/* Social Media (Right) */}
  <motion.div
    className="space-y-3 flex flex-col items-center sm:items-end"
    initial={{ opacity: 0, x: 50 }}
    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
    transition={{ duration: 1, delay: 0.7 }}
  >
    <h2 className=" mr-6 text-xl font-bold text-[#c29849]">Follow Us</h2>
    <div className="flex mt-3 space-x-6">
      {[
        { platform: "Instagram", icon: <Instagram />, url: "https://www.instagram.com/motorstandsensor?igsh=NDYxeGxvajFuNDNp&utm_source=qr" },
        { platform: "Facebook", icon: <Facebook />, url: "https://www.facebook.com/share/15PX5cq9b7/?mibextid=wwXIfr" },
        { platform: "TikTok", icon: <FaTiktok />, url: "https://www.tiktok.com/@motorstandsensor?_t=ZM-8uC2b2mmE1G&_r=1" },
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
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
       &copy; {new Date().getFullYear()} MotorStand Sensor. All rights reserved
      </motion.div>
    </section>
  );
};

export default Footer;
