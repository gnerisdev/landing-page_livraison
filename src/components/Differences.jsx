import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faShieldAlt, faThumbsUp, faTruck, faUsers } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Differences = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", description: "" });
  const items = [
    {
      title: "AMÉLIORE LA QUALITÉ DE LA LIVRAISON",
      description: "Optimisez vos processus pour garantir une livraison rapide et de qualité.",
      icon: faTruck,
    },
    {
      title: "AUGMENTATION DE VOTRE DEMANDE",
      description: "Stimulez la demande avec des solutions adaptées à vos clients.",
      icon: faChartLine,
    },
    {
      title: "EFFICACITÉ GARANTIE",
      description: "Assurez-vous d'une exécution rapide et sans erreurs de vos processus.",
      icon: faThumbsUp,
    },
    {
      title: "SÉCURITÉ RENFORCÉE",
      description: "Renforcez la sécurité de vos données et de vos livraisons.",
      icon: faShieldAlt,
    },
    {
      title: "SATISFACTION DU CLIENT",
      description: "Offrez une expérience client inégalée, favorisant leur fidélité.",
      icon: faUsers,
    },
    {
      title: "OPTIMISATION DES COÛTS",
      description: "Réduisez les coûts opérationnels tout en améliorant les performances.",
      icon: faChartLine,
    },
    {
      title: "INNOVATION CONTINUE",
      description: "Adoptez des technologies novatrices pour vous démarquer de la concurrence.",
      icon: faThumbsUp,
    },
    {
      title: "SUPPORT CLIENT DÉDIÉ",
      description: "Bénéficiez d'une assistance client disponible 24/7 pour résoudre tous les problèmes.",
      icon: faUsers,
    },
    {
      title: "TRAÇABILITÉ EN TEMPS RÉEL",
      description: "Suivez l'évolution de vos livraisons et demandes en temps réel.",
      icon: faTruck,
    },
    {
      title: "FACILITÉ D'UTILISATION",
      description: "Profitez d'une interface intuitive et facile à utiliser pour tous vos besoins.",
      icon: faShieldAlt,
    },
    {
      title: "SERVICES PERSONNALISÉS",
      description: "Bénéficiez de solutions adaptées à vos besoins spécifiques.",
      icon: faUsers,
    },
    {
      title: "GESTION SIMPLIFIÉE",
      description: "Rationalisez vos opérations pour une gestion plus fluide et efficace.",
      icon: faChartLine,
    },
  ];  

  const handleOpenModal = (title, description) => {
    setModalContent({ title, description });
    setModalOpen(true);
  };

  const handleCloseModal = () => setModalOpen(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 900 },
      items: 4,
    },
    mobileLarge: {  
      breakpoint: { max: 900, min: 624 },
      items: 3,
    },
    mobileMedium: {
      breakpoint: { max: 624, min: 0 },
      items: 2,
    },
  };

  return (
    <section id="differences" className="flex flex-col justify-center items-center text-center py-[64px] px-2 m-auto">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        transitionDuration={500}
        className="w-full m-auto"
        arrows={false}
        customTransition="transform 0.5s ease-in-out, opacity 1s ease-in-out" 
        shouldResetAutoplay={false} 
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col max-w-[200px] sm:max-w-[250px] h-[280px] bg-[#292929] p-4 justify-center items-center text-center rounded-md cursor-pointer mx-1"
            onClick={() => handleOpenModal(item.title, item.description)}
          >
            <div className="h-[90px] flex items-center">
              <FontAwesomeIcon icon={item.icon} size="3x" className="text-[#D72638]" />
            </div>
            <h2 className="text-xl font-black text-white mb-2 mt-2">{item.title}</h2>
            <p className="text-gray-400 text-sm line-clamp-3">{item.description}</p>
          </div>
        ))}
      </Carousel>

      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">{modalContent.title}</h2>
            <p className="text-gray-700 mb-4">{modalContent.description}</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={handleCloseModal}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Differences;
