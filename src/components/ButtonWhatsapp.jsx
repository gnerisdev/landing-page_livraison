const ButtonWhatsapp = () => (
  <a
    target="_blank"
    className="z-50 fixed bottom-4 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
    href="https://api.whatsapp.com/send/?phone=+324677710705&amp;text=Bonjour%2C+j%27ai+d%C3%A9couvert+votre+site+et+j%27aimerais+en+savoir+plus+sur+vos+services.&amp;type=phone_number&amp;app_absent=0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="tabler-icon tabler-icon-brand-whatsapp"
    >
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
    </svg>
  </a>
)

export default ButtonWhatsapp
