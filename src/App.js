import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import { HashRouter  as Router } from "react-router-dom";
import React from 'react';


function App() {
 

  return (
    <div className="App">
      
      <Router>
        <Navbar/>
        <Home/>
      </Router>
    </div>
  );
}

export default App;
