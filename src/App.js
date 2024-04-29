import React, { useState } from 'react';
import Navbar from './components/navbar';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Page from './components/page';
import Footer from './components/footer';
import Notfound from './components/404';

function App() {
  const [lang, setLang] = useState('en'); // 'fr' par défaut

  const toggleLang = () => {
    setLang(prevLang => prevLang === 'fr' ? 'en' : 'fr');
  };

  return (
    <div className="App">
       <Router>
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="/" element={
            <>
              <Navbar lang={lang} onToggleLang={toggleLang} />
              <Page lang={lang} />
              <Footer  lang={lang} onToggleLang={toggleLang} />
            </>
          } />
          {/* Route pour la page Notfound */}
          <Route path="/notfound" element={<Notfound lang={lang} onToggleLang={toggleLang}  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
