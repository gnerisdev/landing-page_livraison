import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import background from '../assets/portrait-male-engineer-working.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="mt-0 h-[95vh] relative bg-center bg-cover flex items-center justify-center text-center px-6 sm:px-12"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-[#000000a6]"></div>

      <motion.div 
        className="relative z-10 flex flex-col items-center text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Título animado */}
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold text-[#f3d354] leading-tight max-w-[600px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          Precisão e Tecnologia para Seu Projeto
        </motion.h2>

        {/* Descrição animada */}
        <motion.p 
          className="mt-3 text-lg sm:text-xl lg:text-2xl font-light max-w-[600px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        >
          Levantamentos topográficos, georreferenciamento e medições para regularização.
        </motion.p>
      </motion.div>

      {/* Setinha piscando suavemente */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }} 
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="#differences" className="text-[#f3d354] text-3xl">
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
