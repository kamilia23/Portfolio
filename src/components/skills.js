import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "../styles/skills.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Skills({ lang }) {
  const content = {
    fr: {
      heading: 'Compétences & Capacités',
      
      // Ajoutez d'autres compétences ici
    },
    en: {
      heading: 'Skills & Abilities',
      
      // Add other skills here
    },
  };    return (
      <div className="skills">
       <section className="skills" id="skills">

<h2 className="heading"><FontAwesomeIcon icon={faLaptopCode} /> {content[lang].heading}</h2>

<div className="container">
      <div className="row" id="skillsContainer">

         <div className="bar">
          <div className="info">
            <img alt=" "  src="./Micros.png"/>
            <span>Suite Microsoft Office</span>
         
          </div>
        </div> 
        <div className="bar">
          <div className="info">
            <img alt=" "  src="./android.png"/>
            <span>Android Studio</span>
         
          </div>
        </div> 
        <div className="bar">
          <div className="info">
            <img  alt=" " src="./omn.jpg"/>
            <span>OMNet++</span>
         
          </div>
        </div> 
        <div className="bar">
          <div className="info">
            <img alt=" "  src="./vs.png"/>
            <span>Visual Studio Code</span>
         
          </div>
        </div> 
        <div className="bar">
          <div className="info">
            <img  alt=" " src="./node.png"/>
            <span>NodeJs</span>
         
          </div>
        </div>  <div className="bar">
          <div className="info">
            <img  alt=" " src="./tex.png"/>
            <span>TeXstudio</span>
         
          </div>
        </div>  <div className="bar">
          <div className="info">
            <img  alt=" " src="./fire.png"/>
            <span>Firebase</span>
         
          </div>
        </div>  
        <div className="bar">
          <div className="info">
            <img alt=" " src="./react.png"/>
            <span>Reactjs</span>
         
          </div>
        </div> 
        <div className="bar">
          <div className="info">
            <img alt=" " src="./js.png"/>
            <span>JavaScript</span>
         
          </div>
        </div>  <div className="bar">
          <div className="info">
            <img alt=" " src="./py.png"/>
            <span>Python</span>
         
          </div>
        </div>  <div className="bar">
          <div className="info">
            <img alt=" " src="./sql.png"/>
            <span>MySql</span>
         
          </div>
        </div>  <div className="bar">
          <div className="info">
            <img alt=" " src="./hc.png"/>
            <span>HTML/CSS</span>
         
          </div>
        </div>  <div className="bar">
          <div className="info">
            <img alt=" " src="./xml.png"/>
            <span>XML</span>
         
          </div>
        </div>  <div className="bar">
          <div className="info">
            <img alt=" " src="./soc.png"/>
            <span>Socket.io</span>
         
          </div>
        </div>  <div className="bar">
          <div className="info">
            <img alt=" " src="./web.png"/>
            <span>WebRTC</span>
         
          </div>
        </div>  <div className="bar">
          <div className="info">
            <img alt=" " src="./prisma.png"/>
            <span>Prisma ORM sqlite3</span>
         
          </div>
        </div> 
        <div className="bar">
          <div className="info">
            <img alt=" " src="./electron.png"/>
            <span>Electron Js</span>
         
          </div>
        </div> 
        <div className="bar">
          <div className="info">
            <img alt=" " src="./Wamp.png"/>
            <span>WampServer</span>
         
          </div>
        </div> 
        <div className="bar">
          <div className="info">
            <img alt=" " src="./Php.png"/>
            <span>PhpMyAdmin</span>
         
          </div>
        </div> 
  </div>
</div>
</section>
      </div>
    );
  }
  
  export default Skills;
  