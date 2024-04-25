import About from './about'
import Skill from './skills'
import Education from './education'
import Work from './work'
import Experience from './experience'
import Contact from './contact'
import Home from './home'

function Page({ lang }) {
  return (
    <div className="App">
      <Home lang={lang} />
      <About lang={lang} />
      <Skill lang={lang} />
      <Education lang={lang} />
      <Work lang={lang} />
      <Experience lang={lang} />
      <Contact lang={lang} />
    </div>
  );
}
export default Page;
