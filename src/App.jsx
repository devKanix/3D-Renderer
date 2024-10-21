import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from 'react';
import { About, Contact, Topics, Hero, Navbar, Tech, StarsCanvas } from './components';
import SpinnerLoader from "./components/SpinnerLoader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    window.addEventListener('load', handleLoad);

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <SpinnerLoader text="Loading..." />
      ) : (
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Topics />
          <Tech />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
