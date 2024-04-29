
import '../styles/home.css'
import { useState, useEffect } from 'react';
import { faLinkedin, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';


function Home({lang}) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  
  const content = {
    fr: {
      title: 'Salut',
      name: 'Je m\'appelle ',
      to: 'je suis dans',
      about: 'Sur Moi'
    },
    en: {
      title: 'Hi There',
      name: 'I\'m ',
      to: 'I am into',
      about: 'About Me'
    },
  };

  useEffect(() => {
    const texts = ["frontend development", "backend development", "web development"];

    let currentIndex = 0;
    let currentText = '';
    let interval;

    const typeText = () => {
      if (currentIndex < texts[textIndex].length) {
        currentText += texts[textIndex][currentIndex];
        setDisplayedText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
        currentIndex = 0;
        currentText = '';
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    interval = setInterval(typeText, 200); // 50 millisecondes entre chaque lettre

    return () => clearInterval(interval);
  }, [textIndex]);



  return (
    <div>
      <section className="home" id="home">
     

        <div className="content">
        <h2>{content[lang].title}, {content[lang].name} <span>Kamilia</span></h2>
        <p>{content[lang].to} <span className="typing-text">{displayedText}</span></p>
        <HashLink smooth to="#about" className="btn"><span>{content[lang].about} </span>
        <FontAwesomeIcon icon={faCircleArrowDown} />
        </HashLink>
        <div className="socials">
            <ul className="social-icons">
              <li><a className="linkedin" rel="noreferrer" aria-label="LinkedIn" href="https://www.linkedin.com/in/kamilia-kami-134827255" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li> 
              <li><a className="github" rel="noreferrer" aria-label="GitHub" href="https://github.com/kamilia23" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
             </ul>
             
          </div>
        </div>
        <div className="image">
              <img draggable="false" className="tilt" src="./avatar.png" alt=""/>
        </div>
      </section>
    </div>
  );
}

export default Home;
