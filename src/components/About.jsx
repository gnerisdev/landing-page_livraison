import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import slide1 from '../assets/slide1.jpg' // Adicione outras imagens conforme necessário
import slide2 from '../assets/slide2.jpg'

const responsive = {
  allDevices: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
}

const About = () => (
  <section className="py-[64px]">
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-between">
          <h2 className="text-3xl font-bold text-[#e69752] mb-4">
            Soluções Topográficas Precisas e Confiáveis
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed text-justify hyphens-auto">
            Somos uma empresa de topografia especializada no ramo de
            levantamentos topográficos e agrimensura. Formada por profissionais
            altamente qualificados e experientes, com capacidade de oferecer
            serviços de qualidade e eficiência. <br /> <br />
            Nossa empresa atua em diversos segmentos, como construção civil, georreferenciamento de imóveis rurais e urbanos, e medições para projetos ou regularização em Cartórios e Prefeituras, sempre conforme as normas e legislações vigentes.

          </p>
          <a href="#history">
            <button 
              className="w-full mt-8 inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:text-accent-foreground h-10 text-lg text-white border border-[#e69752] px-4 py-2 rounded-xl hover:font-bold bg-[#e69752] hover:bg-[#f3d354]">
              Conheça Nossa História
            </button>
          </a>
        </div>

        <div className="flex items-center">
          <Carousel
            responsive={responsive}
            infinite={false}
            autoPlay={false}
            autoPlaySpeed={3000}
            transitionDuration={500}
            className="w-full rounded-lg"
          >
            <img
              src={slide1}
              alt="Slide 1"
              className="w-full h-full max-h-[400px] object-cover"
            />
            <img
              src={slide2}
              alt="Slide 2"
              className="w-full h-full max-h-[400px] object-cover"
            />
          </Carousel>
        </div>
      </div>
    </div>
  </section>
)

export default About
