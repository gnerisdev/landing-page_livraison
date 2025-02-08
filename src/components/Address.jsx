const Address = () => {
  return (
    <section id="address" className="flex w-full justify-center py-[64px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-12 gap-0">
          <div>
            <h2 className="text-3xl font-bold text-[#e69752] mb-4">
              NOSSO ENDEREÇO
            </h2>
            <p className="text-gray-300 mb-8">
              Ficou interessado em nossos serviços? Entre em contato conosco e
              solicite um orçamento.
            </p>
            <div className="mb-8">
              <div>
                <h2 className="text-2xl font-bold text-[#f3d354] mb-4">
                  {' '}
                  Araçoiaba da Serra - SP
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-4">
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
                        className="tabler-icon tabler-icon-at text-[#e69752]"
                      >
                        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                        <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-white">
                        Email
                      </h3>
                      <p className="text-gray-300">vfm.topo@gmail.com</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4">
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
                        className="tabler-icon tabler-icon-phone text-[#e69752]"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-white">
                        Celular
                      </h3>
                      <p className="text-gray-300">+55 (15) 99600-5455</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4">
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
                        className="tabler-icon tabler-icon-map-pin text-[#e69752]"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-white">
                        Endereço
                      </h3>
                      <p className="text-gray-300">
                        Av. Luane Milanda Oliveira, 14 – Sala 03 - Jardim Santa
                        Cruz, Araçoiaba da Serra - SP, 18190-000
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4">
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
                        className="tabler-icon tabler-icon-clock text-[#e69752]"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-white">
                        Horário de Atendimento
                      </h3>
                      <p className="text-gray-300">8h manhã. – 18h tarde.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-[400px]">
            <div
              className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg"
              style={{ height: 400 }}
            >
              <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117896.78972330084!2d-48.7181357609375!3d-22.568827799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f37a8993b6cf%3A0xfb20db6976f81452!2sVFM%20-%20Topografia%20e%20Agrimensura!5e0!3m2!1spt-BR!2sbr!4v1738873845631!5m2!1spt-BR!2sbr&t=m" 
    width="100%"
                height="400px"
                className="border-0 rounded-2xl transition-opacity duration-300 opacity-100"
                loading="lazy"
                title="Google Maps"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Address
