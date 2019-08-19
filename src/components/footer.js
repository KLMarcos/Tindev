import React from 'react';
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

import './footer.css';

export default function Footer() {
    return (
        <div className="footer-container">
            <ul>
                <li>
                    <a className = "bmc-button"
                    target = "_blank"
                    rel = "noopener noreferrer"
                    href = "https://www.buymeacoffee.com/enacCUDvu" >
                        <img src = "https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg" alt = "Buy me a coffee"/> 
                        <span> Buy me a coffee</span>
                    </a>
                </li>
                <li>
                    <a className="gh-button"
                    target = "_blank"
                    rel = "noopener noreferrer"
                    href = "https://github.com/KLMarcos" >
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </li>
                <li>
                    <a target = "_blank"
                    rel = "noopener noreferrer" 
                    href="https://rocketseat.com.br/">
                        <img src="https://rocketseat.com.br/static/images/logo-rocketseat.svg" alt="Rocketseat"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}
