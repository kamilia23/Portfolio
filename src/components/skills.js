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
            <img alt=" "  src="https://img.icons8.com/color/48/000000/adobe-xd.png"/>
            <span>AdobeXD</span>
         
          </div>
        </div> 
        <div className="bar">
          <div className="info">
            <img alt=" "  src="https://img.icons8.com/color/48/000000/adobe-xd.png"/>
            <span>AdobeXD</span>
         
          </div>
        </div> 
        <div className="bar">
          <div className="info">
            <img  alt=" " src="https://img.icons8.com/color/48/000000/adobe-xd.png"/>
            <span>AdobeXD</span>
         
          </div>
        </div> 
        <div className="bar">
          <div className="info">
            <img alt=" "  src="https://img.icons8.com/color/48/000000/adobe-xd.png"/>
            <span>AdobeXD</span>
         
          </div>
        </div> 
        <div className="bar">
          <div className="info">
            <img  alt=" " src="https://img.icons8.com/color/48/000000/adobe-xd.png"/>
            <span>AdobeXD</span>
         
          </div>
        </div>  <div className="bar">
          <div className="info">
            <img  alt=" " src="https://img.icons8.com/color/48/000000/adobe-xd.png"/>
            <span>AdobeXD</span>
         
          </div>
        </div>  <div className="bar">
          <div className="info">
            <img  alt=" " src="https://img.icons8.com/color/48/000000/adobe-xd.png"/>
            <span>AdobeXD</span>
         
          </div>
        </div>  <div className="bar">
          <div className="info">
            <img alt=" " src="https://img.icons8.com/color/48/000000/adobe-xd.png"/>
            <span>AdobeXD</span>
         
          </div>
        </div> 

  </div>
</div>
</section>
      </div>
    );
  }
  
  export default Skills;
  