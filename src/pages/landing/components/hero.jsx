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
    <section className="relative h-screen bg-cover bg-center text-center text-white overflow-hidden" style={{ backgroundImage: `url(${hero})` }}>
      {/* Navbar */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? " bg-opacity-70 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
        <nav className="container mx-auto flex justify-between items-center p-4">
          {/* Logo with styled "M" */}
          <h1 className="text-2xl font-bold text-[#977631] flex items-center">
            <span className="bg-white text-[#977631] px-2 rounded-full">M</span>
            <span className="ml-0 relative z-10  ">otorbike Tech</span>
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 font-light">
            {["Home", "About", "Company", "Service", "Contact"].map((item) => (
              <Link key={item} to={item.toLowerCase()} smooth={true} duration={500} className="cursor-pointer hover:text-[#977631] transition">
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center bg-black bg-opacity-70 backdrop-blur-md py-4 font-light">
            {["Home", "About", "Company", "Service", "Contact"].map((item) => (
              <Link key={item} to={item.toLowerCase()} smooth={true} duration={500} className="py-2 text-lg hover:text-[#977631]" onClick={() => setIsOpen(false)}>
                {item}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Background overlay with motion effect */}
      <motion.div className="absolute inset-0  bg-opacity-60 " initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ duration: 1 }} />

      {/* Hero Content */}
      <motion.div className="relative z-10 px-6 md:px-12 flex flex-col items-center justify-center h-full">
        <motion.h2 className="text-5xl md:text-6xl font-bold mb-64 text-[#977631]" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}>
          Enhancing Motorcycle Safety
        </motion.h2>
      </motion.div>
    </section>
  );
};

export default Hero;
