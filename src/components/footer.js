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
                { label: "Accueil", href: "#home" },
                { label: "À propos", href: "#about" },
                { label: "Compétences", href: "#skills" },
                { label: "Formations", href: "#education" },
                { label: "Projets", href: "#work" },
                { label: "Expérience", href: "#experience" },
            ],
            contactInfo: {
                phone: "+213 0658550388",
                email: "aiboudkamilia4@gmail.com",
                address: "Tizi-Ouzou, Algerie-15011",
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
            message: "Do not hesitate to explore the different sections to discover projects, articles and other content. Your visit is greatly appreciated!",
            quickLinks: [
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Formations", href: "#education" },
                { label: "Projects", href: "#work" },
                { label: "Experience", href: "#experience" },
            ],
            contactInfo: {
                phone: "+213 0658550388",
                email: "aiboudkamilia4@gmail.com",
                address: "Tizi-Ouzou, Algeria-15011",
             },
            socials: [
                { icon: faLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jigar-sable/" },
                { icon: faGithub, label: "GitHub", href: "https://github.com/jigar-sable" },
                { icon: faInstagram, label: "Instagram", href: "https://www.instagram.com/jigarsable.dev" },
                { icon: faFacebook, label: "Facebook", href: "https://www.facebook.com/" },
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
                            <a key={index} href={link.href}><FontAwesomeIcon icon={faChevronCircleRight} /> {link.label}</a>
                        ))}
                    </div>

                    <div className="box">
                        <h3>{content[lang].contactInfoTitle}</h3>
                        <p> <FontAwesomeIcon icon={faPhone} /> {content[lang].contactInfo.phone}</p>
                        <p> <FontAwesomeIcon icon={faEnvelope} /> {content[lang].contactInfo.email}</p>
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
                    <a href="#home" aria-label="ScrollTop" id="scroll-top" onClick={scrollToTop} className={`fas fa-angle-up ${showScrollTop ? 'visible' : 'hidden'}`}>
                        <FontAwesomeIcon icon={faArrowCircleUp} />
                    </a>
                )}

               

            </section>
        </div>
    );
}

export default Footer;
