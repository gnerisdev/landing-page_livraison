import { useEffect, useState } from 'react'
import logo from '../assets/images/logo-1.png'

const Header = () => {
  const itemsMenu = [
    { name: 'Accueil', link: 'home' },
    { name: 'Histoire', link: 'history' },
    { name: 'Services', link: 'services' },
    { name: 'Adresse', link: 'address' },
    { name: 'Contact', link: 'message' },
  ]
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const containerMain = document.querySelector('#container-main')
    if (!containerMain) return

    const handleScroll = () => setIsScrolled(containerMain.scrollTop > 50)
    containerMain.addEventListener('scroll', handleScroll)

    return () => {
      containerMain.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header
      className={`${
        isScrolled
          ? 'fixed top-3 left-[50%] translate-x-[-50.5%] w-[calc(100%+6px)]'
          : 'fixed top-3 left-[50%] translate-x-[-50.5%] w-[calc(100%+6px)]'
      } z-[9999]`}
    >
      <div className="container">
        <div
          className={`
            flex items-center justify-between h-24 md:gap-12 rounded-lg w-full
            ${
              isScrolled
                ? 'px-3 from-zinc-900 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/75 dark:from-inherit'
                : 'px-3'
            }
          `}
        >
          <a href="/">
            <img
              alt="Logo Livraison Totale"
              fetchPriority="high"
              className="w-auto sm:h-[70px] h-[50px]"
              src={logo}
            />
          </a>

          <div
            className="hidden md:flex max-w-lg py-4 px-8 rounded-full 
            dark:bg-neutral-900 bg-gradient-to-b backdrop-blur-2xl"
          >
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-xs md:text-sm xl:text-md">
                {itemsMenu.map(
                  (item, index) => (
                    <li 
                      key={index}
                      onClick={() => {
                        setTimeout(() => {
                          const targetElement = document.getElementById(item.link);
                          if (!targetElement) return;
                      
                          const container = document.getElementById('container-main');
                          if (!container) return;
                      
                          const targetPosition = targetElement.offsetTop - 70;
                          container.scrollTo({ top: targetPosition, behavior: 'smooth' });
                        }, 100);
                      }}
                    >
                      <a
                        className="text-white transition hover:text-[#b4000d] dark:text-white dark:hover:text-[#b4000d]"
                        href={`#${item.link}`}
                      >
                        {item.name}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </nav>
          </div>

          <a
            className="hidden md:block text-xs text-white border border-[#b4000d] bg-[#b4000d] hover:bg-[#b4000d] 
            hover:font-bold px-4 py-2 rounded-lg transition duration-300 text-center font-bold"
            href="https://api.whatsapp.com/send/?phone=32467771070&amp;text=Bonjour%2C+je+voudrais+en+savoir+plus+sur+les+services+offerts.&amp;type=phone_number&amp;app_absent=0"
            target='_blank'
          >
            Contactez-nous
          </a>

          <button
            className="md:hidden text-white focus:outline-none"
            aria-label="Ouvrir le menu"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          className={`md:hidden w-full flex bg-[#171717] ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <nav
            aria-label="Global"
            className="w-full flex flex-col justify-center items-center space-y-4 p-4"
          >
            <ul className="flex flex-col items-center justify-center space-y-4 w-full">
              {itemsMenu.map((item, index) => (
                <li 
                  key={index} className="w-full text-center"
                  onClick={() => {
                    setIsMenuOpen(false);                    
                    setTimeout(() => {
                      const targetElement = document.getElementById(item.link);
                      if (!targetElement) return;
                  
                      const container = document.getElementById('container-main');
                      if (!container) return;
                  
                      const targetPosition = targetElement.offsetTop - 70;
                      container.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  <a
                    className="text-white hover:text-[#b4000d] transition duration-300 block py-2"
                    href={`#${item.link}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="text-xs border border-[#b4000d] bg-[#b4000d] hover:bg-[#b4000d] hover:font-bold px-4 py-3 rounded-lg transition duration-300 w-full text-center text-white"
              href="https://api.whatsapp.com/send/?phone=32467771070&amp;text=Bonjour%2C+je+voudrais+en+savoir+plus+sur+les+services+offerts.&amp;type=phone_number&amp;app_absent=0"
              target='_blank'
            >
              Contactez-nous
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
