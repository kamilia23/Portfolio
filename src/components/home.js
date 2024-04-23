import About from './about'
import Skill from './skills'
import Education from './education'
import Work from './work'
import Experience from './experience'
import Contact from './contact'
import Footer from './footer'

function Home() {
  return (
    <div className="App">
      <header className="App-header" id="home">
        <h1>
         hello, my name is kamilia  
        </h1>
        
      </header>
      <body>
        <About/>
        <Skill />
        <Education/>
        <Work/>
        <Experience/>
        <Contact/>
      </body>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default Home;
