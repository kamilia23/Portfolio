
import '../styles/home.css'
import { useState, useEffect } from 'react';


function Home() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["frontend development", "backend development", "web designing", "android development", "web development"];
  const [displayedText, setDisplayedText] = useState('');


  useEffect(() => {
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
      <section class="home" id="home">
        
        <div class="content">
        <h2>Hi There,<br/> I'm Aiboud <span>Kamilia</span></h2>
        <p>i am into <span class="typing-text">{displayedText}</span></p>
        <a href="#about" class="btn"><span>About Me</span>
          <i class="fas fa-arrow-circle-down"></i>
        </a>
        <div class="socials">
            <ul class="social-icons">
              <li><a class="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/jigar-sable/" target="_blank"><i class="fab fa-linkedin"></i></a></li> 
              <li><a class="github" aria-label="GitHub" href="https://github.com/jigar-sable" target="_blank"><i class="fab fa-github"></i></a></li>
              <li><a class="instagram" aria-label="Instagram" href="https://www.instagram.com/jigarsable.dev"><i class="fab fa-instagram" target="_blank"></i></a></li>
              <li><a class="facebook" aria-label="Facebook" href="https://www.facebook.com/" target="_blank"><i class="fab fa-dev"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="image">
              <img draggable="false" class="tilt" src="./logo192.png" alt=""/>
        </div>
      </section>
    </div>
  );
}

export default Home;
