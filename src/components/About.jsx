import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

const items = [
  {
    img: 'https://cdn.abrahao.com.br/base/a0a/472/6c2/ideias-de-delivery.jpg',
    title: 'Flexibilité des services',
    text:
      'Diversifiez vos options avec plusieurs livreurs, garantissant une flexibilité maximale et des délais de livraison optimisés.',
  },
  {
    img:
      'https://omniacontabilidade.com.br/wp-content/uploads/2023/09/3-dicas-para-analisar-os-relatorios-financeiros-da-sua-empresa-e-evite-prejuizos-no-seu-caixa.webp',
    title: 'Informations complètes',
    text:
      'Recevez des rapports détaillés chaque semaine, facilitant le suivi des performances et la prise de décisions éclairées.',
  },
  {
    img:
      'https://communitylivingwell.co.uk/wp-content/uploads/2021/02/iStock-1226681944-lr-1024x683.jpg',
    title: 'Assistance rapide',
    text:
      "Bénéficiez d'un support client en temps réel, disponible 24h/24 pour résoudre rapidement toutes vos préoccupations.",
  },
  {
    img:
      'https://www.sistemampa.com.br/wp-content/uploads/2020/05/delivery-motoboy-moto.jpg',
    title: 'Efficacité dans les livraisons',
    text:
      'Profitez de livraisons rapides et efficaces, garantissant la satisfaction de vos clients avec des délais courts.',
  },
]

const About = () => {
  return (
    <section id="about" className="py-[64px]">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-white mb-4">
            Services de Livraison Optimisés
          </h2>

          <div className="flex items-center">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
              }}
              navigation={true}
              modules={[Autoplay, Navigation, Pagination]}
              className="w-full"
            >
              {items.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="relative rounded-[50px] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="filter brightness-50 aspect-square object-cover lg:aspect-auto"
                    />
                    <div className="absolute w-full h-full z-20 p-8 lg:p-10 flex flex-col justify-end bottom-0">
                      <div className="lg:flex lg:justify-between w-full">
                        <div className="flex flex-col">
                          <h3 className="text-lg text-white font-medium md:font-bold text-size_9x md:text-size_12x xl:text-size_13x mb-1 md:mb-2 xl:mb-3 tracking-normal leading-height_27x md:leading-height_32x xl:leading-height_36x">
                            {item.title}
                          </h3>
                          <p className="font-maisonBook font-light text-white mb-5 md:mb-6 xl:mb-0">
                            {item.text}
                          </p>
                        </div>
                        <div className="xl:flex xl:items-end"></div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
