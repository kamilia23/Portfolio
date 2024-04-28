import "../styles/exp.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faArrowRight } from '@fortawesome/free-solid-svg-icons';




    function Experience({ lang }) {
        const content = {
          fr: {
            title: 'Expérience',
            e1 :'Plateforme d\'agences de voyages ',
            e2:'Application web de visioconférence',
            e3:'Système de reconnaissance faciale',
            e4: 'Application desktop de modèle de facture',
            d3 : 'Janvier 2024 - Avril 2024',
            d4 : 'Mars 2023 - Juillet 2023',
            d5 : 'Novembre 2022 - Avril 2023',
            d6 : 'Mars 2021 - Juillet 2021',
            u1: 'Projet de fin de cycle licence en SI | UMMTO',
            u2: 'Projet formative en master ISI | UMMTO',
            u3: 'Projet fin d\'étude en ISI | UMMTO',
            u4: 'Développeur d\'Applications Desktop | Stage',
            viewAll: 'Voir Tout'
          },
          en: {
            title: 'Experience',
            e1 :'Travel Agency Platform',
            e2:'Videoconferencing web application',
            e3:'Facial recognition system',
            e4:'Invoice template desktop application',
            d3 : 'January 2024 - April 2024',
            d4 : 'March 2023 - July 2023',
            d5 : 'November 2022 - April 2023',
            d6 : 'March 2021 - July 2021',
            u1: 'End of cycle project in IS | UMMTO',
            u2: 'Formative project in ISI master\'s degree | UMMTO',
            u3: 'End of study project in ISI | UMMTO',
            u4: 'Desktop Application Developer | Internship',
            viewAll: 'View All'
          },
        };


    return (
      <div className="exp">
       <section className="experience" id="experience">

            <h2 className="heading"><FontAwesomeIcon icon={faBriefcase} /> {content[lang].title} </h2>

            <div className="timeline">

            <div className="container right">
                <div className="content">
                <div className="tag">
                    <h2>{content[lang].e1}</h2>
                </div>
                <div className="desc">
                    <h3>{content[lang].u1}</h3>
                    <p>{content[lang].d6}</p>
                </div>
                </div>
            </div>

            <div className="container left">
                <div className="content">
                <div className="tag">
                    <h2>{content[lang].e2}</h2>
                </div>
                <div className="desc">
                    <h3>{content[lang].u2}</h3>
                    <p>{content[lang].d5}</p>
                </div>
                </div>
            </div>


            <div className="container right">
                <div className="content">
                <div className="tag">
                    <h2>{content[lang].e3}</h2>
                </div>
                <div className="desc">
                    <h3>{content[lang].u3}</h3>
                    <p>{content[lang].d4}</p>
                </div>
                </div>
            </div>

            <div className="container left">
                <div className="content">
                <div className="tag">
                    <h2>{content[lang].e4}</h2>
                </div>
                <div className="desc">
                    <h3>{content[lang].u4}</h3>
                    <p>{content[lang].d3}</p>
                </div>
                </div>
            </div>
            </div>

            <div className="morebtn">
            <a href="/experience" className="btn"><span>{content[lang].viewAll} </span>
            <FontAwesomeIcon icon={faArrowRight} />
            </a>
            </div>

       

        </section>
      </div>
    );
  }
  
  export default Experience;
  