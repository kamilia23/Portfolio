import About from './about'
import Skill from './skills'
import Education from './education'
import Work from './work'
import Experience from './experience'
import Contact from './contact'
import Home from './home'

function Page() {
  return (
    <div className="App">
      <body>
        <Home/>
        <About/>
        <Skill />
        <Education/>
        <Work/>
        <Experience/>
        <Contact/>
      </body>
    </div>
  );
}

export default Page;
