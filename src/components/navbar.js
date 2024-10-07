import React, { useState, useEffect } from 'react';
import { HashLink } from "react-router-hash-link";
import '../styles/navbar.css';

function Navbar({ lang, onToggleLang }) {
    const [activeItem, setActiveItem] = useState(null);

      
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveItem(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        // Observer chaque section et la mettre à jour si elle est visible
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);
 
    return (
        <div className="Nav">
            <HashLink exact="true" to="/#home">
                <img src={require("../img/avatar.png")} alt="logo" className="Logo" />
            </HashLink>
                        
            <ul className="NavItem">
                <HashLink smooth to="/#home">
                    <button className={activeItem === 'home' ? 'homen' : 'vvd'} onClick={() => setActiveItem('home')}>
                        <span>{lang === 'fr' ? 'Accueil' : 'Home'}</span>
                    </button>
                </HashLink>
                <HashLink smooth to="/#about">
                    <button className={activeItem === 'about' ? 'homen' : 'vvd'} onClick={() => setActiveItem('about')}>
                        <span>{lang === 'fr' ? 'À propos' : 'About'}</span>
                    </button>
                </HashLink>
                <HashLink smooth to="/#skills">
                    <button className={activeItem === 'skills' ? 'homen' : 'vvd'} onClick={() => setActiveItem('skills')}>
                        <span>{lang === 'fr' ? 'Compétences' : 'Skills'}</span>
                    </button>
                </HashLink>
                <HashLink smooth to="/#education">
                    <button className={activeItem === 'education' ? 'homen' : 'vvd'} onClick={() => setActiveItem('education')}>
                        <span>{lang === 'fr' ? 'Formations' : 'Formations'}</span>
                    </button>
                </HashLink>
                <HashLink smooth to="/#work">
                    <button className={activeItem === 'work' ? 'homen' : 'vvd'} onClick={() => setActiveItem('work')}>
                        <span>{lang === 'fr' ? 'Projets' : 'Projects'}</span>
                    </button>
                </HashLink>
                <HashLink smooth to="/#experience">
                    <button className={activeItem === 'experience' ? 'homen' : 'vvd'} onClick={() => setActiveItem('experience')}>
                        <span>{lang === 'fr' ? 'Expérience' : 'Experience'}</span>
                    </button>
                </HashLink>
                <HashLink smooth to="/#contact">
                    <button className={activeItem === 'contact' ? 'homen' : 'vvd'} onClick={() => setActiveItem('contact')}>
                        <span>{lang === 'fr' ? 'Contact' : 'Contact'}</span>
                    </button>
                </HashLink>
                <button className='lang' onClick={onToggleLang}>
                {lang === 'fr' ? 'EN' : 'FR'}
            </button>
            </ul>
        </div>
    );
}

export default Navbar;