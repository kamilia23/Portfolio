import "../styles/education.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

function Education({ lang }) {
  const content = {
    fr: {
      heading: 'Mon Éducation',
      quote: "L'éducation n'est pas l'apprentissage des faits, mais la formation de l'esprit à penser.",
      degree1: 'Master en Ingénierie des Systèmes d\'Information (ISI)',
      college1: 'Université UMMTO',
      duration1: '2021-2023 | Terminé',
      degree4: 'Deuxième et troisième années de licence en Systèmes Informatiques (SI)',
      college4: 'Université UMMTO',
      duration4: '2019-2021 | Terminé',
      degree3: 'Première année licence en tronc commun (MI)',
      college3: 'Université UMMTO',
      duration3: '2018-2019 | Terminé',
      degree2: 'Baccalauréat en sciences expérimentales',
      college2: 'Lycée imache amar',
      duration2: '2017-2018 | Terminé',
    },
    en: {
      heading: 'My Education',
      quote: 'Education is not the learning of facts, but the training of the mind to think.',
      degree1: 'Master in Information Systems Engineering (ISI)',
      college1: 'Université UMMTO',
      duration1: '2021-2023 | Completed',
      degree4: 'Second and third years of license in Computer Systems (IS)',
      college4: 'Université UMMTO',
      duration4: '2019-2021 | Completed',
      degree3: 'First year license in common core (MI)',
      college3: 'UMMTO University',
      duration3: '2017-2018 | Completed',
      degree2: 'Bachelor\'s degree in experimental sciences',
      college2: 'Imache Amar High School',
      duration2: '2017-2018 | Completed',
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
              <h3>{content[lang].degree4}</h3>
              <p>{content[lang].college4}</p>
              <h4>{content[lang].duration4}</h4>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img draggable="false" src={`./avatar.png`} alt="" />
            </div>
            <div className="content">
              <h3>{content[lang].degree3}</h3>
              <p>{content[lang].college3}</p>
              <h4>{content[lang].duration3}</h4>
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
