import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <a href="https://www.facebook.com/acbnational" aria-label="Facebook">
             <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/acbnational" aria-label="Twitter">
                 <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.youtube.com/channel/UCI_nLwS9Cw2Bm1IA4qIBw3Q" aria-label="Youtube">
                 <FontAwesomeIcon icon={faYoutube} />
            </a>
        </footer>
    );
}

export default Footer;
