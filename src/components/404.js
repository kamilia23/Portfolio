import React from 'react';

import "../styles/404.css"
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function Notfound({ lang, onToggleLang  }) {
   


    const content = {
        fr: {
           
            h3: "Opsss! on dirait que tu es perdu",
            p: "La page que vous recherchez n'est pas disponible !",
            span: "retour à la page d'accueil",
             },
        en: {
           
            h3: "Opsss! looks like you're lost",
            p: "The page you are looking for is not available!",
            span: "Back to Home",
            },
    };


    return (
        <>
        
         <section class="page_404">
        <div class="container">
          <div class="wrapper">
            <h1 class="text-center ">404</h1>
          </div>
          
          <div class="msg">
          <h3>{content[lang].h3}</h3>
          <p>{content[lang].p}</p>
           
          <div class="backbtn">
          <HashLink to="/" className="btn">
              <FontAwesomeIcon icon={faArrowLeft} />
              <span> {content[lang].span}</span>
            </HashLink>
          </div>

          </div>
          
        </div>
        <div className='fr'>
          <p  onClick={onToggleLang}>
                {lang === 'fr' ? 'in English' : 'En français'}
        </p>  
        </div>
        
      </section>
      
        </>
       
    )
}

export default Notfound;