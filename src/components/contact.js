import "../styles/contact.css";
import React, { useState , useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser'; 

function Contact({lang}) {

  const content = {
    fr: {
      heading: 'Contactez-moi',
      name: 'Nom',
      email: 'Email',
      phone: 'Téléphone',
      message: 'Message',
      submit: 'Envoyer',
    },
    en: {
      heading: 'Get in Touch',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      submit: 'Submit',
    },
  };

  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6mu9iks', 'template_7p4nh9c',e.target, 'toR3LHvFRuwye2RE9')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };


  return (
    <div className="contact">
      <section className="contact" id="contact">
        <h2 className="heading">
          <FontAwesomeIcon icon={faHeadset} /> {content[lang].heading}
        </h2>
        <div className="container">
          <div className="content">
            <div className="image-box">
              <img draggable="false" src="./avatar.png" alt="" />
            </div>
            <form ref={form} id="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="field">
                  <input
                    type="text"
                    name="name"
                    placeholder={content[lang].name}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="email"
                    name="email"
                    placeholder={content[lang].email}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="field">
                  <input
                    type="text"
                    name="phone"
                    placeholder={content[lang].phone}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="message">
                  <textarea
                    placeholder={content[lang].message}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="button-area">
                <button type="submit">
                  {content[lang].submit} <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
