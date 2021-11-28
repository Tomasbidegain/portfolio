import React from 'react';
import Header from './components/Header';
import MyPresentation from './pages/MyPresentation';
import SobreMi from './pages/SobreMi';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
        <Header />
        <MyPresentation/>
        <SobreMi/>
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
