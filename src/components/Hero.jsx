import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import background from '../assets/images/food-delivery-boy.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="mt-0 h-[100vh] relative bg-top bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-[#000000a6]"></div>

      <div className="container flex items-center h-full">
        <motion.div
          className="relative z-10 flex flex-col items-center text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold  text-white leading-tight max-w-[700px] pl-[12px]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Livraison rapide, sécurisée et faite avec passion!
          </motion.h2>
        </motion.div>

        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <a href="#differences" className="text-[#b4000d] text-3xl">
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
