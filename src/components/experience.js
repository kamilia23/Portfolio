import "../styles/exp.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faArrowRight } from '@fortawesome/free-solid-svg-icons';




    function Experience({ lang }) {
        const content = {
          fr: {
            title: 'Expérience',
            selfEmployed: 'Auto-entrepreneur',
            Mapstreak :'Mapstreak Flyseas ',
            sparkf:'La Fondation Spark',
            frshr:'Frshr Technologies',
            won: 'WonderingBlog',
            d1 : 'octobre 2021 - présent',
            d2 : 'Juin 2021 - Décembre 2021',
            d3 : 'Mai 2021 - juin 2021',
            d4 : 'avril 2021 - mai 2021',
            d5 : 'Avril 2021 - Avril 2021',
            d6 : 'mars 2021 - avril 2021',
            fullStackDeveloper: 'Développeur Full Stack',
            webDeveloper: 'Développeur Web | Stage',
            websiteDeveloper: 'Développeur de Sites Web | Stage',
            mobileApplicationDeveloper: 'Développeur d\'Applications Mobiles | Stage',
            wordpressDeveloper: 'Développeur Wordpress | Stage',
            webDevelopmentSEO: 'Développement Web & SEO | Stage',
            date: '{{start}} - {{end}}',
            viewAll: 'Voir Tout'
          },
          en: {
            title: 'Experience',
            selfEmployed: 'Self Employed',
            Mapstreak :'Mapstreak Flyseas',
            sparkf:'The Spark Foundation',
            frshr:'Frshr Technologies',
            won:'WonderingBlog',
            d1: 'Oct 2021 - present',
            d2: 'June 2021 - Dec 2021',
            d3: 'May 2021 - June 2021',
            d4: 'April 2021 - May 2021',
            d5: 'April 2021 - April 2021',
            d6: 'March 2021 - April 2021',
            
            fullStackDeveloper: 'Full Stack Developer',
            webDeveloper: 'Web Developer | Internship',
            websiteDeveloper: 'Website Developer | Internship',
            mobileApplicationDeveloper: 'Mobile Application Developer | Internship',
            wordpressDeveloper: 'Wordpress Developer | Internship',
            webDevelopmentSEO: 'Web Development & SEO | Internship',
            date: '{{start}} - {{end}}',
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
                    <h2>{content[lang].selfEmployed}</h2>
                </div>
                <div className="desc">
                    <h3>{content[lang].fullStackDeveloper}</h3>
                    <p>{content[lang].d1}</p>
                </div>
                </div>
            </div>

            <div className="container left">
                <div className="content">
                <div className="tag">
                    <h2>{content[lang].Mapstreak}</h2>
                </div>
                <div className="desc">
                    <h3>{content[lang].webDeveloper}</h3>
                    <p>{content[lang].d2}</p>
                </div>
                </div>
            </div>

            <div className="container right">
                <div className="content">
                <div className="tag">
                    <h2>{content[lang].sparkf}</h2>
                </div>
                <div className="desc">
                    <h3>{content[lang].webDeveloper}</h3>
                    <p>{content[lang].d3}</p>
                </div>
                </div>
            </div>

            <div className="container left">
                <div className="content">
                <div className="tag">
                    <h2>{content[lang].sparkf}</h2>
                </div>
                <div className="desc">
                    <h3>{content[lang].mobileApplicationDeveloper}</h3>
                    <p>{content[lang].d4}</p>
                </div>
                </div>
            </div>

            <div className="container right">
                <div className="content">
                <div className="tag">
                    <h2>{content[lang].frshr}</h2>
                </div>
                <div className="desc">
                    <h3>{content[lang].wordpressDeveloper}</h3>
                    <p>{content[lang].d5}</p>
                </div>
                </div>
            </div>

            <div className="container left">
                <div className="content">
                <div className="tag">
                    <h2>{content[lang].won}</h2>
                </div>
                <div className="desc">
                    <h3>{content[lang].webDevelopmentSEO}</h3>
                    <p>{content[lang].d6}</p>
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
  