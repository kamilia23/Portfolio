import "../styles/education.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Education({ lang }) {
  const content = {
    fr: {
      heading: 'Mon Éducation',
      quote: "L'éducation n'est pas l'apprentissage des faits, mais la formation de l'esprit à penser.",
      degree1: 'Bachelor en Ingénierie en Technologie de l\'Information',
      college1: 'Zeal College of Engineering and Research | SPPU',
      duration1: '2020-2024 | En cours',
      degree2: 'HSC Science | Pratiques Informatiques',
      college2: 'Shri L.G. Haria Multipurpose School | CBSE',
      duration2: '2018-2020 | Terminé',
    },
    en: {
      heading: 'My Education',
      quote: 'Education is not the learning of facts, but the training of the mind to think.',
      degree1: 'Bachelor of Engineering in Information Technology',
      college1: 'Zeal College of Engineering and Research | SPPU',
      duration1: '2020-2024 | Pursuing',
      degree2: 'HSC Science | Informatic Practices',
      college2: 'Shri L.G. Haria Multipurpose School | CBSE',
      duration2: '2018-2020 | Completed',
    },
  };

  return (
    <div className="education">
      <section className="education" id="education">
        <h1 className="heading">
          <FontAwesomeIcon icon={faGraduationCap} /> {content[lang].heading}
        </h1>

        <h6 className="quotet">{content[lang].quote}</h6>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img draggable="false" src={`./avatar.png`} alt="" />
            </div>
            <div className="content">
              <h3>{content[lang].degree1}</h3>
              <p>{content[lang].college1}</p>
              <h4>{content[lang].duration1}</h4>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img draggable="false" src={`./avatar.png`} alt="" />
            </div>
            <div className="content">
              <h3>{content[lang].degree1}</h3>
              <p>{content[lang].college1}</p>
              <h4>{content[lang].duration1}</h4>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img draggable="false" src={`./avatar.png`} alt="" />
            </div>
            <div className="content">
              <h3>{content[lang].degree2}</h3>
              <p>{content[lang].college2}</p>
              <h4>{content[lang].duration2}</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
