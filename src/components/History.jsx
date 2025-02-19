import 'react-multi-carousel/lib/styles.css'
import logo from '../assets/images/logo-4.png'

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
          <h2 className="text-3xl font-bold text-white mb-4">Qui Nous Sommes?</h2>
          <p className="mt-4 text-gray-300 leading-relaxed text-justify hyphens-auto" style={{ textAlignLast: 'left', wordSpacing: '-0.05em' }}>
          <strong>Livraison Totale </strong>
            est une entreprise de livraison à <strong>Bruxelles</strong>, 
            service de livraison. Spécialisé dans la fourniture de services agiles et sécurisés.
          </p>
          <p className="text-gray-300 leading-relaxed text-justify mt-4 hyphens-auto" style={{ textAlignLast: 'left', wordSpacing: '-0.05em' }}>
            Notre mission va au-delà de la simple livraison de colis; Nous
            visons à répondre aux besoins de nos employés et de nos clients,
            en nous engageant à toujours offrir le meilleur. Tout cela est
            fait avec une touche particulière de dévouement et d’amour dans
            chaque livraison que nous effectuons.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default History
