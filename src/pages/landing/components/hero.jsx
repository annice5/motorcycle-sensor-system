import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import hero from "../../../assets/hero.jpg";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detect scroll position for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative min-h-screen bg-cover bg-center text-center text-white overflow-hidden flex flex-col justify-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-opacity-70 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto flex justify-between items-center px-4 md:px-8 py-3">
          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-bold text-[#977631] flex items-center">
            <span className="bg-white text-[#977631] px-2 rounded-full">M</span>
            <span className="ml-0 relative z-10">otorbike Tech</span>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 font-light">
            {["Home", "About", "Company", "Service", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-[#977631] transition text-sm md:text-base"
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
          <div className="md:hidden flex flex-col items-center bg-black bg-opacity-80 backdrop-blur-md py-4 font-light">
            {["Home", "About", "Company", "Service", "Contact"].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="py-2 text-lg hover:text-[#977631]"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Background overlay */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
      />

      {/* Hero Content */}
      <motion.div className="relative z-10 px-6 md:px-12 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#977631] mb-16 sm:mb-20 md:mb-32"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Enhancing Motorcycle Safety
        </motion.h2>
      </motion.div>
    </section>
  );
};

export default Hero;
