import { motion } from "framer-motion";
import company from "../../../assets/company.jpg";
import me from "../../../assets/me.jpg"; // Replace with the actual owner image

const Company = () => {
  return (
    <section
      id="innovator"
      className="relative h-screen bg-cover bg-center flex items-center justify-center px-8 md:px-20 "
      style={{ backgroundImage: `url(${company})` }}
    >
       
      {/* Container */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 text-left text-white "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
         
          <h2 className="text-[#c29849] text-sm ">ABOUT INNOVATOR</h2>
          <p className="text-white mt-3 font-light">
            A young male innovator from Berekum East, Bono Region seeks to address motorcycle safety by developing a sensor system thats connects the motorcycle's ignition to its stand.He seeks mentorship to refine his idea and funding to develop and test the sensor, ensuring safer roads for motorcyclist and communities.
          </p>

        </motion.div>

        {/* Right Image */}
        <motion.div
      className="flex flex-col items-center mt-8 md:mt-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {/* Image Wrapper with Border */}
      <div className="relative bg-[#c29849] p-2">
        <img
          src={me}
          alt="innovator"
          className="w-80 h-80 object-cover  "
        />
      </div>

      {/* Name and Title */}
      <h3 className="text-[#c29849] font-bold text-lg mt-2">Patrick Boateng</h3>
      <p className="text-gray-400 text-sm">Innovator</p>
    </motion.div>

      </div>
    </section>
  );
};

export default Company;
