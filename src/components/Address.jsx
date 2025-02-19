const Address = () => {
  return (
    <section id="address" className="flex w-full justify-center py-[64px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-12 gap-0">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Région d'activité</h2>
            <p className="text-gray-300 mb-8">
              Intéressé par nos services ? Contactez-nous et demandez plus d'informations.
            </p>
            <div className="mb-8">
              <div>
                <h2 className="text-2xl font-bold text-[#D72638] mb-4">
                  {' '}
                  Bruxelles - Belgique
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
                        className="tabler-icon tabler-icon-at text-[#D72638]"
                      >
                        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                        <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-white">
                        Email
                      </h3>
                      <p className="text-gray-300">contact@livraisontotaleest.com</p>
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
                        className="tabler-icon tabler-icon-phone text-[#D72638]"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-white">
                        Téléphone
                      </h3>
                      <p className="text-gray-300">+32 467 77 10 70</p>
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
                        className="tabler-icon tabler-icon-clock text-[#D72638]"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold text-white">
                        Horaires d'ouverture
                      </h3>
                      <p className="text-gray-300">24h</p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80598.6017194071!2d4.375416550000001!3d50.8551227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3a4ed73c76867%3A0xc18b3a66787302a7!2sBruxelas%2C%20B%C3%A9lgica!5e0!3m2!1spt-BR!2sbr!4v1739952141898!5m2!1spt-BR!2sbr"
                width="100%"
                height="400px"
                className="border-0 rounded-2xl transition-opacity duration-300 opacity-100"
                loading="lazy"
                title="Google Maps"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Address
