import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/work.css"
import { faArrowRight, faCode, faEye, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

function Work({ lang }) {
  
  const content = {
    fr: {
      heading: 'Projets',
      made: 'Réalisés',
      tag: 'Plateforme collaborative d\'agences de voyages',
      tag1: 'Application web de visioconférence',
      tag2: 'Conception et Réalisation d\'un système de reconnaissance faciale',
      tag3: 'Application desktop de modèle de facture',
      tag4: 'Site Portfolio',
      desc: 'Le projet Collaborative Travel Platform est conçu dans le cadre d\'une formation de Licence 3, où il vise à mettre en pratique les compétences acquises et à favoriser l\'innovation dans le domaine du voyage collaboratif.',
      desc1: 'Application web de visioconférence développée dans le cadre d\'un projet collaboratif au sein de l\'Université UMMTO. Cette plateforme permet aux utilisateurs de se connecter facilement pour des réunions virtuelles, des cours en ligne et des discussions en temps réel, offrant ainsi une solution professionnelle et conviviale pour la communication à distance.',
      desc2: 'La conception et la création d\'un système de reconnaissance faciale est un projet de mémoire de fin d\'études qui explore en profondeur les techniques et technologies existantes dans le domaine de la reconnaissance faciale. Ce projet vise à créer une solution robuste et efficace en combinant différentes méthodes de traitement d\'image et d\'intelligence artificielle',
      desc3: 'un projet que j\'ai développé lors de mon premier emploi. Cette application permet aux utilisateurs de générer et de personnaliser facilement des factures, simplifiant ainsi la gestion des transactions commerciales. Ce projet a été l\'occasion de mettre en pratique mes compétences en développement logiciel tout en répondant aux exigences spécifiques du milieu professionnel.',
      desc4: 'Explorez mon portfolio en ligne pour découvrir mes compétences, mes réalisations et mon parcours professionnel. Des projets de conception graphique à la programmation, plongez dans un voyage visuel captivant de mes collaborations et réalisations personnelles.',
      viewAll: 'Voir tout',
    },
    en: {
      heading: 'Projects',
      made: 'Made',
      tag: 'Collaborative Travel Agency Platform',
      tag1: 'Videoconferencing web application',
      tag2: 'Design and production of a facial recognition system',
      tag3: 'Invoice template desktop application',
      tag4: 'Portfolio Website',
      desc: 'The Collaborative Travel Platform project is designed as part of a License 3 course, where it aims to put into practice the skills acquired and to promote innovation in the field of collaborative travel.',
      desc1: 'Videoconferencing web application developed as part of a collaborative project within UMMTO University. This platform allows users to easily connect for virtual meetings, online classes and real-time discussions, providing a professional and user-friendly solution for remote communication.',
      desc2: 'The Design and Creation of a Facial Recognition System is a final thesis project which explores in depth existing techniques and technologies in the field of facial recognition. This project aims to create a robust and efficient solution by combining different image processing and artificial intelligence methods',
      desc3: 'a project that I developed during my first job. This application allows users to easily generate and customize invoices, simplifying the management of business transactions. This project was an opportunity to apply my software development skills while meeting the specific requirements of the professional environment.',
      desc4: 'Explore my online portfolio to discover my skills, achievements and professional background. From graphic design projects to programming, dive into a captivating visual journey of my personal collaborations and achievements.',
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
      <h3>{content[lang].tag4}</h3>
      </div>
      <div className="desc">
        <p>{content[lang].desc4}</p>
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
      <h3>{content[lang].tag3}</h3>
      </div>
      <div className="desc">
      <p>{content[lang].desc3}</p>
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
      <h3>{content[lang].tag2}</h3>
      </div>
      <div className="desc">
      <p>{content[lang].desc2}</p>
        <div className="btns">
          <a href="/some-meaningful-url" className="btn"  target="_blank"><FontAwesomeIcon icon={faEye} /> </a>
          <a href="https://github.com/kamilia23" className="btn" rel="noreferrer" target="_blank" > <FontAwesomeIcon icon={faCode} /></a>
        </div>
      </div>
      
    </div>
    
  </div>
  <div className="box tilt">
        <img draggable="false" src="./avatar.png" alt="" />
 
    <div className="content">
      <div className="tag">
      <h3>{content[lang].tag1}</h3>
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
<a href="/projects" className="btn"><span>{content[lang].viewAll} </span>
<FontAwesomeIcon icon={faArrowRight} />
</a>
</div>

</section>
      </div>
    );
  }
  
  export default Work;
  