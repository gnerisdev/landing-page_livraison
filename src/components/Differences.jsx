import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs, faUsers, faHandshake, faCalendarCheck, faLeaf, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Differences = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", description: "" });
  const items = [
    {
      title: "Tecnologia de Ponta",
      description: "Utilização de equipamentos modernos e precisos, como estações totais, GPS de alta precisão, drones para mapeamento aéreo e softwares avançados de processamento de dados.",
      icon: faCogs
    },
    {
      title: "Equipe Qualificada",
      description: "Profissionais altamente capacitados, como engenheiros cartógrafos, agrimensores e técnicos em topografia, com vasta experiência no mercado.",
      icon: faUsers
    },
    {
      title: "Atendimento Personalizado",
      description: "Foco nas necessidades específicas de cada cliente, oferecendo soluções sob medida para projetos urbanos, rurais, ambientais ou industriais.",
      icon: faHandshake
    },
    {
      title: "Compromisso com Prazos",
      description: "Cumprimento rigoroso dos prazos estabelecidos, sem abrir mão da qualidade e precisão dos serviços.",
      icon: faCalendarCheck
    },
    {
      title: "Sustentabilidade",
      description: "Adoção de práticas sustentáveis nos processos de trabalho, minimizando impactos ambientais.",
      icon: faLeaf
    },
    {
      title: "Cobertura de Serviços",
      description: "Diversificação de serviços, como topografia para construção civil, regularização fundiária, levantamentos planialtimétricos, monitoramento de obras, mapeamento com drones e consultoria técnica.",
      icon: faGlobe
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
    <section className="flex flex-col justify-center items-center text-center py-[64px] px-2 m-auto">
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
              <FontAwesomeIcon icon={item.icon} size="3x" className="text-[#e69752]" />
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
