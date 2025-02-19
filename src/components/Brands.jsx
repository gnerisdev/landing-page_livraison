import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import image1 from '../assets/images/logo-marmitexas.jpg'
import image2 from '../assets/images/logo-062gastrobar.jpg'
import image3 from '../assets/images/logo-maisa-caldos.png'
import image4 from '../assets/images/logo-dona-potato.png'
import image5 from '../assets/images/logo-chezpudim.png'
import image6 from '../assets/images/logo-after-drinks.png'
import imageStars from '../assets/images/stars.svg'

const feedbacks = [
  {
    img: image1,
    alt: 'tiny card',
    title: 'Marmitexas',
    text:
      'Livraisons à temps, service exceptionnel. Nous nous sentons en sécurité et attentifs à chaque commande.',
  },
  {
    img: image2,
    alt: 'tiny card',
    title: '062gastrobar',
    text:
      'Expérience incroyable! Efficacité, sécurité et une touche spéciale. Nous le recommandons sans hésitation.',
  },
  {
    img: image3,
    alt: 'tiny card',
    title: 'Maisa Caldos',
    text:
      'Des soupes réconfortantes et un service impeccable. Toujours un plaisir de commander chez Maisa Caldos!',
  },
  {
    img: image4,
    alt: 'tiny card',
    title: 'Dona Potato',
    text:
      "Des pommes de terre cuites à la perfection et un service rapide. Très satisfait de l'expérience!",
  },
  {
    img: image5,
    alt: 'tiny card',
    title: 'Chez Pudim',
    text:
      'Des desserts délicieux! Chez Pudim est définitivement un endroit à ne pas manquer.',
  },
  {
    img: image6,
    alt: 'tiny card',
    title: 'After Drinks',
    text:
      'Des cocktails créatifs et un environnement agréable. Parfait pour passer du temps entre amis!',
  },
]

const Brands = () => (
  <section id="brands" className="bg-[#292929]">
    <div className="">
      <div className="py-[64px]">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Retour Des Clients
        </h2>

        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 20 }, // Exibe 2 slides no tablet
            1024: { slidesPerView: 3, spaceBetween: 20 }, // Exibe 3 slides no desktop
          }}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          modules={[Autoplay]}
          className="w-full"
        >
          {feedbacks.map((item, i) => (
            <SwiperSlide
              key={i}
              className="flex flex-col justify-center items-center"
            >
              <img
                alt="tiny card"
                src={item.img}
                className="rounded-full w-[120px] h-[120px] m-auto"
              />
              <h3 className="font-bold text-lg m-2 text-white text-center">
                {item.title}
              </h3>
              <div className="h-[80px]">
                <p className="text-white text-center">
                  {'"'}
                  {item.text}
                  {'"'}
                </p>
              </div>
              <img
                alt="tiny card"
                src={imageStars}
                className="w-[140px] object-cover object-center m-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </section>
)

export default Brands
