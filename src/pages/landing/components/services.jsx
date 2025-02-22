import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ShieldCheck, Bell, Wrench, CloudRain, CheckCircle } from "lucide-react";
import services from "../../../assets/services.jpg";

const serviceList = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Automatic Stand Detection",
    description: "Prevents the motorcycle from starting unless the stand is properly unmounted.",
  },
  {
    icon: <Bell size={40} />,
    title: "Real-Time Alerts",
    description: "Notifies riders when the stand is still engaged to avoid accidents.",
  },
  {
    icon: <Wrench size={40} />,
    title: "Easy Installation",
    description: "Designed for a quick and simple setup without special tools.",
  },
  {
    icon: <CloudRain size={40} />,
    title: "Weather Resistant",
    description: "Built to withstand all riding conditions, ensuring long-term reliability.",
  },
  {
    icon: <CheckCircle size={40} />,
    title: "Safety Compliance",
    description: "Ensures adherence to road safety regulations and standards.",
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    
    threshold: 0.2, // Animation triggers when 20% of the section is visible
  });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-16 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${services})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#c29849] mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>
        <p
          className="text-gray-300 max-w-2xl mx-auto mb-12 font-light"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          Enhancing motorcycle safety with smart technology. Our sensor system ensures secure riding.
        </p>

        {/* Service Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg border border-white/10 text-center space-y-4"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
            >
              <div className="text-[#c29849] flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-300 font-light">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
