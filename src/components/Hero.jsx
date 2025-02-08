import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import backgroundImg from "../assets/portrait-male-engineer-working.jpg";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const carouselItems = [
  {
    image: backgroundImg,
    title: "MAPEAMENTO COM SCANNERS 3D",
    description: "Trabalhamos com a exclusiva tecnologia do Laser Scanner 3D Matterport PRO3.",
  },
];

const Hero = () => {
  return (
    <section id="home" className="mt-6">
      <div className="relative w-full max-w-screen-xl sm:py-12 sm:px-6 lg:px-8 container mx-auto py-[64px]">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={3000}
          showDots={true}
          arrows={true}
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="relative w-full h-[260px] sm:h-[400px] lg:h-[472px] rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end justify-center lg:justify-end">
                <div className="flex flex-col max-w-lg m-4 lg:m-8 text-center lg:text-left">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white">{item.title}</h2>
                  <p className="text-xs sm:text-sm lg:text-md text-white mb-2 pr-8">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
