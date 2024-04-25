import React, { useState } from 'react';
import Navbar from './components/navbar';
import { HashRouter as Router } from "react-router-dom";
import Page from './components/page';
import Footer from './components/footer';

function App() {
  const [lang, setLang] = useState('en'); // 'fr' par défaut

  const toggleLang = () => {
    setLang(prevLang => prevLang === 'fr' ? 'en' : 'fr');
  };

  return (
    <div className="App">
      <Router>
        <Navbar lang={lang} onToggleLang={toggleLang} />
        <Page lang={lang} />
        <Footer  lang={lang} onToggleLang={toggleLang} />
      </Router>
    </div>
  );
}

export default App;
