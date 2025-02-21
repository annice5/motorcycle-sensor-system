import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutBackground from "../../../assets/aboutBackground.jpg";
import aboutImage from "../../../assets/aboutImage.jpg"; // Motorcycle image

const About = () => {
  // Ref for the About Section
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${aboutBackground})` }}
    >
      {/* Background Overlay */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.5 } : {}}
        transition={{ duration: 1.5 }}
      />

      <div className="relative w-full px-6 sm:px-12 md:px-24 flex flex-col md:flex-row items-center">
        {/* Image Section with Golden Frame */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative">
            {/* Golden Background Frame */}
            <motion.div
              className="absolute -top-4 -left-4 w-full h-full bg-[#c29849]"
              initial={{ x: -10, y: -10, opacity: 0 }}
              animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
              transition={{ duration: 1 }}
            />

            {/* Motorcycle Image (Ensures it is on top of the golden frame) */}
            <motion.img
              src={aboutImage}
              alt="Motorbike"
              className="relative w-full max-w-md md:max-w-lg rounded-md shadow-lg z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
            />
          </div>
        </div>

        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 text-left bg-opacity-40 p-6 sm:p-10 rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <motion.p
            className="text-[#c29849] text-xs sm:text-sm uppercase tracking-widest"
            initial={{ y: -10, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            ABOUT US
          </motion.p>

          <motion.h1
            className="text-[#c29849] font-bold text-xl sm:text-2xl mt-3"
            initial={{ x: -20, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            Enhancing Motorcycle Safety with Smart Sensor Technology
          </motion.h1>

          <motion.p
            className="text-white mt-3 text-sm sm:text-base font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          >
            At Motorbike Tech, we are committed to revolutionizing motorcycle safety through
            cutting-edge sensor technology. Our innovative system integrates seamlessly with the motorcycle's ignition, preventing the bike from starting or moving until the side stand is fully retracted.
          </motion.p>

          <motion.p
            className="text-white mt-2 text-sm sm:text-base font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            Many motorcycle accidents occur due to riders forgetting to lift the side stand, leading to unexpected loss of control. Our smart sensor system eliminates this risk, ensuring a safer riding experience for all motorcyclists.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
