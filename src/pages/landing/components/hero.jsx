import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroImage from "../../../assets/heroImage.jpg";
import logo from "../../../assets/logo.png"; // Replace with your actual logo image path

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track active section
  const { ref, inView } = useInView({ threshold: 0.3 });

  // Detect scroll position for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Observe sections to track which one is in view
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
      <motion.div
        className="absolute inset-0 bg-black/60"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Fixed Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto flex justify-between items-center px-4 md:px-8 py-4">
          {/* Logo */}
          <Link to="home" smooth={true} duration={500}>
            <img src={logo} alt="Motorbike Tech Logo" className="h-10 sm:h-12 object-contain cursor-pointer" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 font-light">
            {["Home", "About", "Company", "Service", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80} // Adjusts for fixed navbar height
                className={`cursor-pointer text-sm md:text-base transition ${
                  activeSection === item.toLowerCase() ? "text-[#c29849] font-bold" : "text-gray-400"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center bg-black/90 backdrop-blur-md py-4 font-light space-y-3">
            {["Home", "About", "Company", "Service", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80} // Adjusts for fixed navbar height
                className="text-lg hover:text-[#977631] transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Hero Content */}
      <motion.div className="relative z-10 px-6 md:px-12 text-center bottom-32">
        <motion.h2
          className="text-4xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl text-[#b89c67] mb-10 sm:mb-16 md:mb-20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Motorcycle Stand Sensor
        </motion.h2>
      </motion.div>
    </section>
  );
};

export default Hero;
