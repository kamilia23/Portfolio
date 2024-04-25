import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/work.css"
import { faArrowRight, faCode, faEye, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function Work({ lang }) {
  
  const content = {
    fr: {
      heading: 'Projets',
      made: 'Réalisés',
      tag: 'Site Portfolio',
      desc: 'Site personnel de portfolio. Pas besoin de beaucoup d\'infos à ce sujet, faites simplement défiler. Vous êtes ici seulement!',
      viewAll: 'Voir tout',
    },
    en: {
      heading: 'Projects',
      made: 'Made',
      tag: 'Portfolio Website',
      desc: 'Personal portfolio website. Don\'t need much info about it, just scroll down. You\'re here only!',
      viewAll: 'View All',
    },
  };
    return (
      <div className="work">
       <section className="work" id="work">

<h2 className="heading"><FontAwesomeIcon icon={faLaptopCode} /> Projects <span>Made</span></h2>

<div className="box-container">

   <div className="box tilt">
        <img draggable="false" src="./avatar.png" alt="" />
 
    <div className="content">
      <div className="tag">
      <h3>{content[lang].tag}</h3>
      </div>
      <div className="desc">
        <p>{content[lang].desc}</p>
        <div className="btns">
          
          <a href="/some-meaningful-url" className="btn" target="_blank"><FontAwesomeIcon icon={faEye} />  </a>
          <a href="https://github.com/kamilia23" rel="noreferrer" className="btn" target="_blank"> <FontAwesomeIcon icon={faCode} /></a>
        </div>
      </div>
      
    </div>
    
  </div>
  <div className="box tilt">
        <img draggable="false" src="./avatar.png" alt="" />
 
    <div className="content">
      <div className="tag">
      <h3>{content[lang].tag}</h3>
      </div>
      <div className="desc">
      <p>{content[lang].desc}</p>
        <div className="btns">
          <a href="/some-meaningful-url" className="btn" target="_blank"><FontAwesomeIcon icon={faEye} />  </a>
          <a href="https://github.com/kamilia23" className="btn" rel="noreferrer" target="_blank"> <FontAwesomeIcon icon={faCode} /></a>
        </div>
      </div>
      
    </div>
    
  </div>
  <div className="box tilt">
        <img draggable="false" src="./avatar.png" alt="" />
 
    <div className="content">
      <div className="tag">
      <h3>{content[lang].tag}</h3>
      </div>
      <div className="desc">
      <p>{content[lang].desc}</p>
        <div className="btns">
          <a href="/some-meaningful-url" className="btn"  target="_blank"><FontAwesomeIcon icon={faEye} /> </a>
          <a href="https://github.com/kamilia23" className="btn" rel="noreferrer" target="_blank" > <FontAwesomeIcon icon={faCode} /></a>
        </div>
      </div>
      
    </div>
    
  </div>
  

</div>

<div className="viewall">
<a href="/projects" className="btn"><span>{content[lang].viewAll}</span>
<FontAwesomeIcon icon={faArrowRight} />
</a>
</div>

</section>
      </div>
    );
  }
  
  export default Work;
  