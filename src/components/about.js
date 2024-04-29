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
      text: 'Je suis une développeuse Full-Stack basée à Tizi-Ouzou, en Algérie, âgée de 25 ans. Mon enthousiasme se nourrit de l\'amélioration constante de mes compétences en codage et en développement d\'applications desktop, ainsi que de sites Web. Je me spécialise dans la création de WebApps et de sites Web en utilisant ReactJS. Actuellement, je suis ingénieure en système d\'information au sein d\'une entreprise.',
      details: {
        age: 'Âge : 25 ans',
        phone: 'Téléphone : +213 06XXXXXXXX',
        email: 'Email : XXXXXXXXXX@gmail.com',
        place: 'Lieu : Tizi-Ouzou, Algérie'
      },
      cv: 'Télécharger le CV'
    },
    en: {
      title: 'Full Stack Developer',
      name: 'I\'m Kamilia',
      me: 'Me',
      about: 'About',
      text: 'I am a 25 year old Full-Stack Developer based in Tizi-Ouzou, Algeria. My enthusiasm is fueled by the constant improvement of my skills in coding and developing desktop applications, as well as websites. I specialize in creating WebApps and websites using ReactJS. Currently, I am an information systems engineer within a company.',
      details: {
        age: 'Age : 25 years old',
        phone: 'Phone : +213 06XXXXXXXX',
        email: 'Email : XXXXXXXXXX@gmail.com',
        place: 'Place : Tizi-Ouzou, Algeria'
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
        { /* <p><span>{content[lang].details.phone}</span></p>
          <p><span>{content[lang].details.email}</span></p>*/}
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
  