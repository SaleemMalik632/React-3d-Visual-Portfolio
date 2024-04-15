// import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Header, Navbar, Hero, Education } from './Components';
import Logo from './assets/hero.jpg'


function App() {

  return (
    <>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <Header />
          <Education /> 

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
