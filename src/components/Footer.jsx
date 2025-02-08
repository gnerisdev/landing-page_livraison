import logo from '../assets/LogoVFM-1.png';

const Footer = () => {
  return (
    <footer className="text-white py-12 relative bg-[#171717]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between flex-wrap gap-2">
          <div className="mb-4">
            <a href="/">
              <img
                alt="VFM Topografia Logo"
                width="150"
                height="50"
                decoding="async"
                data-nimg="1"
                className="m-auto"
                src={logo}
              />
            </a>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-4">A VFM Topografia</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-[#e69752]" href="/sobre">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a className="hover:text-[#e69752]" href="/servicos">
                  Serviços
                </a>
              </li>
              <li>
                <a className="hover:text-[#e69752]" href="/contato">
                  Entre em contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Siga Nossas Redes Sociais
            </h4>
            <div className="flex flex-col">
              <div className="flex space-x-4 mb-4">
                <a
                  target="_blank"
                  className="hover:text-[#e69752]"
                  href="https://www.facebook.com/vfmtopografia/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-facebook"
                  >
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  className="hover:text-[#e69752]"
                  href="https://www.instagram.com/vfm.topo /"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-instagram"
                  >
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M16.5 7.5l0 .01"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#72645f] text-center">
          <p className="text-sm">© {new Date().getFullYear()} VFM Topografia & Agrimensura</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
