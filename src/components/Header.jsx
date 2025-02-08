import { useEffect, useState } from 'react'
import logo from '../assets/LogoVFM-1.png'

const Header = () => {
  const itemsMenu = [
    { name: 'Home', link: 'home' },
    { name: 'História', link: 'history' },
    { name: 'Serviços', link: 'services' },
    { name: 'Endereço', link: 'address' },
    { name: 'Contato', link: 'message' },
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
              alt="VFM Topografia Logo"
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
                    <li key={index}>
                      <a
                        className="text-white transition hover:text-[#e69752] dark:text-white dark:hover:text-[#e69752]"
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
            className="hidden md:block text-xs text-white border border-[#e69752] hover:bg-[#e69752] 
            hover:font-bold px-4 py-2 rounded-lg transition duration-300 text-center"
            href="#contato"
          >
            SOLICITAR ORÇAMENTO
          </a>

          <button
            className="md:hidden text-white focus:outline-none"
            aria-label="Abrir menu"
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
                <li key={index} className="w-full text-center">
                  <a
                    className="text-white hover:text-[#e69752] transition duration-300 block py-2"
                    href={`#${item.link}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="text-xs border border-[#f3d354] hover:bg-[#e69752] hover:font-bold px-4 py-3 rounded-lg transition duration-300 w-full text-center text-white"
              href="#contato"
            >
              SOLICITAR ORÇAMENTO
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
