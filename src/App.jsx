import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import About from './components/About/About';
import MeetOurTrainers from './components/MeetOurTrainers/MeetOurTrainers';
import Contact from './components/Contact/Contact';
import Price from './components/Price/Price';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-12 main-content">
          <Routes>
            <Route path="/" element={
              <>
                <section id="home">
                  <Main />
                </section>
                
                <section id="about">
                  <About />
                </section>
                
                <section id="Meet">
                  <MeetOurTrainers />
                </section>
                
                <section id="Price">
                  <Price />
                </section>
                
                <section id="contact">
                  <Contact />
                </section>
              </>
            } />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;