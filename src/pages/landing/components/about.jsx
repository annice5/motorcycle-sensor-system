import { motion } from "framer-motion";
import about from "../../../assets/about.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${about})` }}
    >
      {/* Background Overlay with Fade-in Effect */}
      <motion.div
        className="absolute inset-0 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      />

      {/* Content Wrapper */}
      <div className="flex justify-end items-center h-full px-12 md:px-24 relative">
        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <motion.p
            className="text-[#c29849] text-sm uppercase tracking-widest ml-14"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            ABOUT US
          </motion.p>

          <motion.h1
            className="text-[#c29849] font-bold text-2xl mt-4 ml-14"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            Enhancing Motorcycle Safety with Smart Sensor Technology
          </motion.h1>

          <motion.p
            className="text-white mt-4 font-light ml-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          >
            At Motorbike Tech, we are committed to revolutionizing motorcycle safety through
            cutting-edge sensor technology. Our innovative sensor system integrates seamlessly
            with the motorcycle's ignition, preventing the bike from starting or moving until
            the side stand is fully retracted.Many motorcycle accidents occur due to riders forgetting to lift the side stand, leading to unexpected loss of control.Our smart sensor system eliminates this risk, ensuring a safer riding experience for all motorcyclist 
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
