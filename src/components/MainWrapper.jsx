import backgroundImg from '../assets/images/2205_w039_n003_236b_p1_236.svg'

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
