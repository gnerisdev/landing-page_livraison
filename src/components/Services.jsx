import image1 from '../assets/service1.avif';
import image2 from '../assets/service2.avif';
import image3 from '../assets/service3.avif';
import image4 from '../assets/service4.avif';
import image5 from '../assets/service5.avif';
import image6 from '../assets/service6.avif';
import image7 from '../assets/service7.avif';
import image8 from '../assets/service8.avif';
import image9 from '../assets/service9.avif';
import image10 from '../assets/service10.avif';
import image11 from '../assets/service11.avif';
import image12 from '../assets/service12.avif';
import { useState } from 'react';

const services = [
  {
    name: 'Levantamento Planialtimétrico',
    img: image1,
    description: `
      • Mapeamento do terreno com curvas de nível, altimetria e planimetria.
      • Identificação e demarcação de limites de propriedades.
      • Locação de obras para construção de edificações e infraestrutura.
    `,
  },
  {
    name: 'Georreferenciamento de Imóveis Rurais',
    img: image2,
    description: `
      • Regularização fundiária conforme normas do INCRA.
      • Memorial descritivo e certificação para o CAR.
    `,
  },
  {
    name: 'Mapeamento Aéreo com Drones',
    img: image3,
    description: `
      • Imagens aéreas para mapeamento de grandes áreas.
      • Geração de ortomosaicos e modelos digitais de terreno.
      • Aplicações em monitoramento ambiental e agricultura.
    `,
  },
  {
    name: 'Serviços para Construção Civil',
    img: image4,
    description: `
      • Topografia para projetos de infraestrutura.
      • Verificação de níveis e alinhamentos em obras.
      • As-built: documentação final da obra construída.
    `,
  },
  {
    name: 'Regularização Fundiária e Urbana',
    img: image5,
    description: `
      • Plantas e memorial descritivo para regularização.
      • Desmembramento, parcelamento e unificação de lotes.
    `,
  },
  {
    name: 'Monitoramento de Projetos',
    img: image6,
    description: `
      • Acompanhamento de movimentação de terras e estruturas.
      • Monitoramento de erosão e estabilidade de taludes.
    `,
  },
  {
    name: 'Serviços de Agrimensura',
    img: image7,
    description: `
      • Demarcação e retificação de áreas e limites.
      • Elaboração de laudos e pareceres técnicos.
    `,
  },
  {
    name: 'Topografia para Mineração',
    img: image8,
    description: `
      • Mapeamento de áreas de mineração.
      • Cálculo de volumes e movimentação de materiais.
      • Acompanhamento de extração e recuperação ambiental.
    `,
  },
  {
    name: 'Projetos de Infraestrutura',
    img: image9,
    description: `
      • Levantamentos para redes de saneamento e energia.
      • Topografia para drenagem e pavimentação.
    `,
  },
  {
    name: 'Consultoria e Assessoria Técnica',
    img: image10,
    description: `
      • Suporte para projetos e documentação legal.
      • Análise de dados topográficos para decisões estratégicas.
    `,
  },
  {
    name: 'Serviços Ambientais',
    img: image11,
    description: `
      • Mapeamento de áreas de preservação e reservas legais.
      • Apoio técnico para licenciamento ambiental.
    `,
  },
  {
    name: 'Cadastro Técnico Multifinalitário',
    img: image12,
    description: `
      • Cadastro técnico para municípios com redes e edificações.
    `,
  },
];

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    description: '',
  });

  const handleOpenModal = (title, description) => {
    setModalContent({ title, description });
    setModalOpen(true);
  };

  const handleCloseModal = () => setModalOpen(false);

  const createWhatsAppLink = (serviceName) => {
    const message = `Olá, gostaria de solicitar um orçamento para o serviço "${serviceName}".`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/5515996005455?text=${encodedMessage}`;
  };

  return (
    <section id="services" className="flex flex-col justify-center items-center text-left py-[64px]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#e69752] mb-4">SERVIÇOS</h2>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 flex-wrap gap-8 gap-x-7">
          {services.map((service, index) => {
            const items = modalContent.description.split('.').filter(item => item.trim());

            return (
              <article key={index}>
                <div className="mx-auto flex flex-col justify-between w-full max-w-[340px] h-full min-h-[80px] bg-[#292929] p-4 items-center rounded-md">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="h-[180px] w-full object-cover rounded-md"
                  />
                  <h2 className="text-xl w-full font-black text-white mb-2 mt-3 text-center">
                    {service.name}
                  </h2>
                  <button
                    className="bg-[#72645f] w-full mt-8 inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:text-accent-foreground h-10 text-lg text-white border border-[#72645f] px-4 py-2 rounded-xl hover:font-bold hover:bg-[#72645f]"
                    onClick={() => handleOpenModal(service.name, service.description)}
                  >
                    Saiba mais
                  </button>
                </div>

                {modalOpen && (
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#00000012] bg-opacity-50 z-[10000]">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                      <h2 className="text-2xl font-bold mb-4">
                        {modalContent.title}
                      </h2>
                      <p className="text-gray-700 text-left">
                        {items.map((item, index) => (
                          <span key={index} className="block my-2 text-left">{item.trim()}.</span>
                        ))}
                      </p>

                      <div className="flex w-full gap-3 h-[48px] mt-4">
                        <a
                          href={createWhatsAppLink(service.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#e69752] text-white px-4 py-2 rounded-lg w-full"
                        >
                          Solicitar Orçamento
                        </a>
                        <button
                          className="bg-gray-500 text-white px-4 py-2 rounded-lg w-full basis-[60%]"
                          onClick={handleCloseModal}
                        >
                          Fechar
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;