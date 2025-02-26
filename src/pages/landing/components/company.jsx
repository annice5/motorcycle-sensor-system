import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import company from "../../../assets/company.jpg";
import innovator from "../../../assets/innovator.jpg"; // Replace with the actual owner image

const Company = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref} // Attach ref to the section
      id="company"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6 sm:px-12 md:px-20"
      style={{ backgroundImage: `url(${company})` }}
    >
      {/* Background Overlay for Better Readability */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      />

      {/* Container */}
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8">
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 text-left text-white p-6 md:p-0"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[#c29849] text-sm sm:text-sm uppercase font-semibold">
            ABOUT INNOVATOR
          </h2>
          <p className="text-white mt-3 text-lg sm:text-base font-light leading-relaxed">
            A young male innovator from Berekum East, Bono Region seeks to address motorcycle
            safety by developing a sensor system that connects the motorcycle's ignition to its
            stand. He seeks mentorship to refine his idea and funding to develop and test the
            sensor, ensuring safer roads for motorcyclists and communities.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Image Wrapper with Background Frame */}
          <div className="relative">
            {/* Golden Background - Extends on Left, Right, and Bottom */}
            <div className="absolute -bottom-2 -left-2 -right-2 h-52 bg-[#c29849]"></div>

            {/* Image on Top */}
            <img
              src={innovator}
              alt="innovator"
              className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover z-10"
            />
          </div>

          {/* Name and Title */}
          <h3 className="text-[#c29849] font-bold text-base sm:text-lg mt-3">
            Patrick Boateng
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm">Innovator</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Company;
