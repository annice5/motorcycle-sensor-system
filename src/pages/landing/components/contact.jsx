import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import contactImage from "../../../assets/contactImage.jpg";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.3,  });

  return (
    <section
      ref={ref} // Attach ref to Contact section
      id="contact"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6 sm:px-12 md:px-20"
      style={{ backgroundImage: `url(${contactImage})` }}
    >
      {/* Background Overlay */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-70"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      />

      {/* Content Container */}
      <motion.div
        className="relative text-white flex flex-col items-start bottom-12 text-left px-4 sm:px-8 max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-[#c29849] self-center sm:self-start mb-5"
          initial={{ y: -20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="text-lg sm:text-base self-center sm:self-start font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Have any questions? Feel free to reach out to us!
        </motion.p>

        {/* Contact Information */}
        <motion.div
          className="mt-10 space-y-4  sm:text-base self-center sm:self-start font-light text-lg "
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {/* Email */}
          <p className="flex items-center gap-2 ">
            <Mail className="w-5 h-5 text-[#c29849]" />
            <strong>Email:</strong> motorstandsensor@gmail.com
          </p>

          {/* Phone */}
          <p className="flex items-center gap-2 ">
            <Phone className="w-5 h-5 text-[#c29849]" />
            <strong>Phone:</strong> +233 544168870
          </p>

          {/* Address */}
          <p className="flex items-center gap-2 ">
            <MapPin className="w-5 h-5 text-[#c29849]" />
            <strong>Address:</strong> Berekum East, Bono Region
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
