import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import services from '../../../assets/services.jpg';
import serviceImage1 from "../../../assets/serviceImage1.jpg";
import serviceImage2 from '../../../assets/serviceImage2.jpg';
import serviceImage3 from '../../../assets/serviceImage3.jpg';
import serviceImage4 from '../../../assets/serviceImage4.jpg';
import serviceImage5 from '../../../assets/serviceImage5.jpg';

const serviceList = [
 
  {
    image: serviceImage2,
    title: "Real-Time Alerts",
    description: "Notifies riders when the stand is still engaged to avoid accidents.",
  },
  {
    image: serviceImage3,
    title: "Easy Installation",
    description: "Designed for a quick and simple setup without special tools.",
  },
  {
    image: serviceImage4,
    title: "Weather Resistant",
    description: "Built to withstand all riding conditions, ensuring long-term reliability.",
  },
  {
    image: serviceImage5,
    title: "Automatic Stand Detection",
    description: "Prevents the motorcycle from starting unless the stand is properly unmounted.",
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <section
      id="service"
      ref={ref}
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${services})` }}
    >
       {/* Background Overlay */}
       <motion.div
        className="absolute inset-0 bg-black bg-opacity-70"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#c29849] mb-6 text-center "
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>

        <p
          className="text-white max-w-2xl mx-auto mb-12 font-light text-lg"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          Enhancing motorcycle safety with smart technology. Our sensor system ensures secure riding.
        </p>

        {/* Service Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 p-4 md:p-6 bg-opacity-75 "
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
            >
              {/* Image with Frame */}
              <div className="relative ">
                {/* Golden Frame */}
                <div className="absolute -bottom-1 -left-1 -top-1 w-20   bg-[#c29849] "></div>

                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="relative w-40 h-20 object-cover z-10 "
                />
              </div>

              {/* Text Content */}
              <div className="text-left">
                <h3 className="text-lg md:text-xl font-bold text-[#c29849]">{service.title}</h3>
                <p className="text-white font-light md:text-base">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
