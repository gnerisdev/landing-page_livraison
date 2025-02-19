import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import MainWrapper from './components/MainWrapper';
import About from './components/About';
import Services from './components/Services';
import Address from './components/Address';
import Differences from './components/Differences';
import Message from './components/Message';
import ButtonWhatsapp from './components/ButtonWhatsapp';
import Footer from './components/Footer';
import History from './components/History';
import Brands from './components/Brands';

const App = () => {
  return (
    <MainWrapper>
      <Header />
      <Hero />
      <Differences />
      <Services />
      <History />
      <Brands />
      <About />
      <Address />
      <Message />
      <ButtonWhatsapp />
      <Footer />
    </MainWrapper>
  )
}

export default App
