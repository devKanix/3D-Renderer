import { BrowserRouter } from "react-router-dom";
import { About, Contact, Topics, Hero, Navbar, Tech, StarsCanvas } from './components';
import SPLoader from "./components/SpinnerLoader";

const App=() => {
  return (
    <BrowserRouter>
    <div>
    <SPLoader />
    </div>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <About/>
      <Topics/>
      <Tech/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
