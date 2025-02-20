import services from "../../../assets/services.jpg";

const Services = () => {
  return (
    <section
      id="services"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6 sm:px-12 md:px-20"
      style={{ backgroundImage: `url(${services})` }}
    >
      {/* Background Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content Wrapper */}
      <div className="relative text-center text-white max-w-4xl px-4 sm:px-8">
        <h2 className="text-[#c29849] text-lg sm:text-xl md:text-2xl font-bold uppercase">
          Our Services
        </h2>
        <p className="text-sm sm:text-base md:text-lg mt-4 leading-relaxed">
          At Motorbike Tech, we are committed to improving motorcycle safety with cutting-edge
          sensor technology. Our services focus on developing and integrating smart sensor
          systems that prevent motorcycles from starting or moving until the side stand is fully
          retracted, reducing accidents and enhancing road safety.
        </p>
      </div>
    </section>
  );
};

export default Services;
