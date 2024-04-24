import './App.css';
import Navbar from './components/navbar';
import { HashRouter  as Router } from "react-router-dom";
import React from 'react';
import Page from './components/page';
import Footer from './components/footer';


function App() {
 

  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Page/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
