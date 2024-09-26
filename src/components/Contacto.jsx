import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contacto = () => {
  return (
    <div className="contacto">
      <p>
        <a href="mailto:alejandro.the.developer@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://es.linkedin.com/pub/alejandroperezrodriguez" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/alexmcanawer/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </p>
    </div>
  );
};

export default Contacto;
