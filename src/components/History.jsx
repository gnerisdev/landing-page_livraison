import 'react-multi-carousel/lib/styles.css'
import logo from '../assets/LogoVFM-2.png'

const History = () => (
  <section id="history" className="py-[64px]">
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8">
        <img
          src={logo}
          alt="Slide 2"
          className="w-full h-full max-h-[350px] object-contain"
        />

        <div className="w-full lg:w-[80%] lg:m-[auto] max-[100%] lg:-ml-8">
          <h2 className="text-3xl font-bold text-[#e69752] mb-4">
            NOSSA HISTÓRIA
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed text-justify hyphens-auto" style={{ textAlignLast: 'left', wordSpacing: '-0.05em' }}>
            Fundada em 2010 em Araçoiaba da Serra, a VFM Topografia iniciou com
            serviços de topografia para propriedades rurais e urbanas, expandindo-se rapidamente para projetos de engenharia e georreferenciamento, sempre focada em inovação e no desenvolvimento local.
          </p>
          <p className="text-gray-300 leading-relaxed text-justify mt-4 hyphens-auto" style={{ textAlignLast: 'left', wordSpacing: '-0.05em' }}>
            Oferecer soluções técnicas em topografia e georreferenciamento, com
            excelência, focando no desenvolvimento sustentável de projetos e
            satisfação do cliente.
          </p>
          <p className="text-gray-300 leading-relaxed text-justify mt-4 hyphens-auto" style={{ textAlignLast: 'left', wordSpacing: '-0.05em' }}>
            A empresa prioriza qualidade, comprometimento, inovação, ética e sustentabilidade em seus serviços.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default History
