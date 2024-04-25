import "../styles/about.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDownload } from '@fortawesome/free-solid-svg-icons';




function About({lang}) {
  const content = {
    fr: {
      title: 'Développeuse Full Stack',
      name: 'Je suis Kamilia',
      me: 'Moi',
      about: 'À propos de',
      text: 'Je suis une développeuse Full-Stack basée à Tizi-Ouzou, en Algérie. J\'ai 25 ans et je suis très passionnée par l\'amélioration de mes compétences en codage et développement d\'applications et de sites Web. Je crée des WebApps et des sites Web à l\'aide de MERN Stack. Travailler à mon compte pour améliorer mes compétences. J\'adore créer des clones Full-Stack.',
      details: {
        age: 'Âge : 25 ans',
        phone: 'Téléphone : 0658550388',
        email: 'Email : aiboudkamilia4@gmail.com',
        place: 'Lieu : Beni-Douala, Tizi-Ouzou, Algérie - 15011'
      },
      cv: 'Télécharger le CV'
    },
    en: {
      title: 'Full Stack Developer',
      name: 'I\'m Kamilia',
      me: 'Me',
      about: 'About',
      text: 'I am a Full-Stack developer based in Tizi-Ouzou, Algeria. I am 25 years old and very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.',
      details: {
        age: 'Age: 25',
        phone: 'Phone: 0658550388',
        email: 'Email: aiboudkamilia4@gmail.com',
        place: 'Place: Beni-Douala, Tizi-Ouzou, Algeria - 15011'
      },
      cv: 'Download CV'
    },
  };
  
    return (
      <div className="about">
        <section className="about" id="about">
            <h2 className="heading"><FontAwesomeIcon icon={faUser} /> {content[lang].about} <span>{content[lang].me}</span></h2>
            
            <div className="row">
              <div className="image">
                  <img draggable="false" src={`../avatar.png`} alt=""/>
              </div>
              <div className="content">
                  <h3>{content[lang].name}</h3>
                  <span className="tag">{content[lang].title}</span>
                  
                  <p>{content[lang].text}</p>
                  
                  <div className="box-container">
                      <div className="box">
          <p><span>{content[lang].details.age}</span></p>
          <p><span>{content[lang].details.phone}</span></p>
          <p><span>{content[lang].details.email}</span></p>
          <p><span>{content[lang].details.place}</span></p>
        </div>
                  </div>
                  
                  <div className="resumebtn">
                      <a href=" " target="_blank" className="btn"><span>{content[lang].cv} <FontAwesomeIcon icon={faDownload} /></span>
                      
                      </a>
                  </div>

              </div>
            </div>
        </section>
      </div>
    );
  }
  
  export default About;
  