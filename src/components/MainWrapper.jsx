import backgroundImg from '../assets/4048563.svg'

const MainWrapper = ({ children }) => (
  <main 
    className="relative w-full h-[100vh] bg-[#121212] bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage:  `url(${backgroundImg})` }}
  >
    <div id="container-main" className="relative w-full h-full overflow-y-auto">
      {children}
    </div>    
  </main>
)

export default MainWrapper
