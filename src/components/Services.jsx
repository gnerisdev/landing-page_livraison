import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react'
import { motion } from "framer-motion";
import image1 from '../assets/images/motorcycle-delivery-single-box.png'
import image2 from '../assets/images/online-support.png'
import image3 from '../assets/images/graph-report-script.png'
import image4 from '../assets/images/local-delivery-time.png'

const services = [
  {
    imgSrc: image1,
    title: 'Plusieurs Livreurs',
    description: 'Bénéficiez d\'une large flotte de livreurs pour assurer des livraisons rapides et efficaces, peu importe la demande.',
  },
  {
    imgSrc: image2,
    title: 'Soutien En Ligne',
    description: 'Notre équipe de support est disponible en ligne pour répondre à vos questions et vous assister en temps réel.',
  },
  {
    imgSrc: image3,
    title: 'Rapport Hebdomadaire',
    description: 'Recevez des rapports détaillés chaque semaine pour suivre vos performances et optimiser votre logistique.',
  },
  {
    imgSrc: image4,
    title: 'Livraison Rapide',
    description: 'Profitez d\'un service de livraison express pour garantir la satisfaction de vos clients avec des délais réduits.',
  },
];


const Services = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({
    title: '',
    description: '',
  })

  const handleOpenModal = (title, description) => {
    setModalContent({ title, description })
    setModalOpen(true)
  }

  const handleCloseModal = () => setModalOpen(false)

  const createWhatsAppLink = (serviceName) => {
    const message = `Salut, j'aimerais en savoir plus sur "${serviceName}".`;
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/32467771070?text=${encodedMessage}`
  }

  return (
    <section
      id="services"
      className="flex flex-col justify-center items-center text-left py-[64px]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-4 uppercase">
          Services Personnalisé
        </h2>
        <div className="w-full grid sm:grid-cols-2 flex-wrap gap-8 gap-x-7">
          {services.map((service, index) => {
            return (
              <motion.article 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
              >
                <div className="text-center bg-[#292929] p-5 rounded-[15px] flex flex-col items-center justify-center gap-[16px]">
                  <div className="w-full h-auto m-auto rounded-[10px] p-0 flex items-center justify-center mt-[22px]">
                    <img
                      src={service.imgSrc}
                      className="h-[100px] w-auto object-cover"
                      alt={service.title}
                    />
                  </div>
                  <h3 className="font-bold text-[1.7rem] mb-2 text-white">
                    {service.title}
                  </h3>
                  <div
                    onClick={() => handleOpenModal(service.title, service.description)}
                    className="ml-auto w-[44px] h-[44px] rounded-[7px] bg-[#ae0101] flex services-center justify-center items-center cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="text-white text-[24px]"/>
                  </div>
                </div>

                {modalOpen && (
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#00000012] bg-opacity-50 z-[10000]">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                      <h2 className="text-2xl font-bold mb-4">
                        {modalContent.title}
                      </h2>
                      <p className="text-gray-700 text-left">{service.description}</p>

                      <div className="flex w-full gap-3 h-[48px] mt-4">
                        <a
                          href={createWhatsAppLink(service.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#A12020] text-white px-4 py-2 rounded-lg w-full flex items-center justify-center"
                        >
                          En savoir plus
                        </a>
                        <button
                          className="bg-gray-500 text-white px-4 py-2 rounded-lg w-full basis-[60%] flex items-center justify-center"
                          onClick={handleCloseModal}
                        >
                          Fermer
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
