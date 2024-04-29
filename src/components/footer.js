import '../styles/footer.css'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faArrowCircleUp, 
    faPhone, 
    faEnvelope, 
    faMapMarkerAlt, 
    faChevronCircleRight 
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


function Footer({ lang, onToggleLang }) {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [lastScrollTime, setLastScrollTime] = useState(Date.now());

    useEffect(() => {
        let timer;

        const handleScroll = () => {
            // Mettez à jour le temps du dernier défilement
            setLastScrollTime(Date.now());

            // Récupérez la position actuelle de défilement
            const currentScrollY = window.scrollY;

            // Récupérez la position du bas de la section "Home"
            const homeBottom = document.getElementById('home').offsetTop + document.getElementById('home').offsetHeight;

            // Mettez à jour l'état pour afficher ou masquer le bouton "ScrollTop"
            setShowScrollTop(currentScrollY > homeBottom);

            // Réinitialisez le timer à chaque fois que le défilement se produit
            clearTimeout(timer);
            timer = setTimeout(() => setShowScrollTop(false), 2000);
        };

        const handleTimer = () => {
            const elapsedTime = Date.now() - lastScrollTime;
            if (elapsedTime >= 2000) {
                setShowScrollTop(false);
            }
        };

        // Ajoutez les écouteurs d'événements
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('touchmove', handleScroll); // Écouteur d'événement de défilement tactile
        timer = setInterval(handleTimer, 2000); // Vérifiez le temps écoulé toutes les 2 secondes

        // Retirez les écouteurs d'événements et le timer lorsque le composant est démonté
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchmove', handleScroll);
            clearInterval(timer);
        };
    }, [lastScrollTime]);


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
            
    };



    const content = {
        fr: {
            title1: "Portfolio de Kamilia",
            message: "N'hésitez pas à explorer les différentes sections pour découvrir les projets, articles et autres contenus. Votre visite est grandement appréciée ! ",
            quickLinks: [
                { label: "Accueil", to: "#home" },
                { label: "À propos", to: "#about" },
                { label: "Compétences", to: "#skills" },
                { label: "Formations", to: "#education" },
                { label: "Projets", to: "#work" },
                { label: "Expérience", to: "#experience" },
            ],
            contactInfo: {
                phone: "+213 06XXXXXXXX",
                email: "XXXXXXXXX@gmail.com",
                address: "Tizi-Ouzou, Algerie",
            },
            socials: [
                { icon: faLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jigar-sable/" },
                { icon: faGithub, label: "GitHub", href: "https://github.com/jigar-sable" },
                { icon: faInstagram, label: "Instagram", href: "https://www.instagram.com/jigarsable.dev" },
                { icon: faFacebook, label: "Facebook", href: "https://www.facebook.com/" },
            ],
            credit: "Crée par <a href='https://www.linkedin.com/in/jigar-sable'>Aiboud Kamilia</a>"
        },
        en: {
            title1: "Kamilia's Portfolio",
            message: "Don't hesitate to explore the different sections to discover projects, articles and other content. Your visit is greatly appreciated!",
            quickLinks: [
                { label: "Home", to: "#home" },
                { label: "About", to: "#about" },
                { label: "Skills", to: "#skills" },
                { label: "Formations", to: "#education" },
                { label: "Projects", to: "#work" },
                { label: "Experience", to: "#experience" },
            ],
            contactInfo: {
                phone: "+213 06XXXXXXXX",
                email: "XXXXXXXXX@gmail.com",
                address: "Tizi-Ouzou, Algeria",
             },
            socials: [
                { icon: faLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kamilia-kami-134827255" },
                { icon: faGithub, label: "GitHub", href: "https://github.com/kamilia23" },
               
                
            ],
            credit: "Created by <a href='https://www.linkedin.com/'>Aiboud Kamilia</a>"
        },
    };

    return (
        <div className="footer">
            <section className="footer">

                <div className="box-container">
                <button onClick={onToggleLang}>
                    {lang === 'fr' ? 'EN' : 'FR'}
                </button>
                    <div className="box">
                        <h3>{content[lang].title1}</h3>
                        <p dangerouslySetInnerHTML={{ __html: content[lang].message }}></p>
                    </div>
                   
                    <div className="boxe">
                        <h3>{content[lang].quickLinksTitle}</h3>
                        {content[lang].quickLinks.map((link, index) => (
                            <HashLink smooth key={index} to={link.to}>
                                <FontAwesomeIcon icon={faChevronCircleRight} />
                                 {link.label}
                            </HashLink>
                        ))}
                    </div>

                    <div className="box">
                        <h3>{content[lang].contactInfoTitle}</h3>
                      {/*  <p> <FontAwesomeIcon icon={faPhone} /> {content[lang].contactInfo.phone}</p>
                        <p> <FontAwesomeIcon icon={faEnvelope} /> {content[lang].contactInfo.email}</p>*/}
                        <p> <FontAwesomeIcon icon={faMapMarkerAlt} /> {content[lang].contactInfo.address}</p>
                        <div className="share">
                            {content[lang].socials.map((social, index) => (
                                <i key={index}><a className={social.label.toLowerCase()} rel="noreferrer" aria-label={social.label} href={social.href} target="_blank"><FontAwesomeIcon icon={social.icon} /></a></i>
                            ))}
                        </div>
                    </div>
                </div>

                <h1 className="credit" dangerouslySetInnerHTML={{ __html: content[lang].credit }}></h1>
                
                {showScrollTop && (
                   <Link to="/#home"><p aria-label="ScrollTop" id="scroll-top" onClick={scrollToTop} className={`fas fa-angle-up ${showScrollTop ? 'visible' : 'hidden'}`}>
                        <FontAwesomeIcon icon={faArrowCircleUp} />
                    </p>
                    </Link> 
                )}

               

            </section>
        </div>
    );
}

export default Footer;
