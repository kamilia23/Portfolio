
import '../styles/home.css'
import { useState, useEffect } from 'react';
import { faLinkedin, faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';


function Home({lang}) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  
  const content = {
    fr: {
      title: 'Salut',
      name: 'Je m\'appelle Aiboud',
      to: 'je suis dans',
      about: 'Sur Moi'
    },
    en: {
      title: 'Hi There',
      name: 'I\'m Aiboud',
      to: 'I am into',
      about: 'About Me'
    },
  };

  useEffect(() => {
    const texts = ["frontend development", "backend development", "web designing", "android development", "web development"];

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
        <h2>{content[lang].title},<br/> {content[lang].name} <span>Kamilia</span></h2>
        <p>{content[lang].to} <span className="typing-text">{displayedText}</span></p>
        <a href="#about" className="btn"><span>{content[lang].about} </span>
        <FontAwesomeIcon icon={faCircleArrowDown} />
        </a>
        <div className="socials">
            <ul className="social-icons">
              <li><a className="linkedin" rel="noreferrer" aria-label="LinkedIn" href="https://www.linkedin.com/in/jigar-sable/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li> 
              <li><a className="github" rel="noreferrer" aria-label="GitHub" href="https://github.com/jigar-sable" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><a className="instagram" rel="noreferrer" aria-label="Instagram" href="https://www.instagram.com/jigarsable.dev"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a className="facebook" rel="noreferrer" aria-label="Facebook" href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
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
