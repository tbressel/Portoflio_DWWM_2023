import React from 'react';
import Navigation from '../components/Navigation';
import SocialNetworks from '../components/SocialNetworks';
import Planet from '../components/contact/Planet';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Contact = () => {
    return (
        <div className='contact'>

            <Navigation />
        <div className="contact-content">
            <div className='header'>
                <div className='contact-box'>
                    <h3>Contactez moi</h3>
                    <ul>
                        <li>
                            <img src="./medias/localisation-icn.svg"/>
                            <span>
                                Caen
                            </span>
                        </li>
                        <li className='no-tel'>
                        <img src="./medias/phone-icn.svg"/>
                            <CopyToClipboard text="0769689214">
                                <span className='clickInput' onClick={() =>
                                     { alert('Numéro copié dans le presse papier')}}>
                                    07 69 68 92 14
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li className='e-mail'>   
                              <img src="./medias/emailat-icn.svg"/>
                            <CopyToClipboard text="tbressel.dev@gmail.com">
                                <span className='clickInput' onClick={() =>
                                     { alert('Email copié dans le presse papier')}}>
                                    tbressel.dev 'at' gmail.com
                                </span>
                            </CopyToClipboard></li>
                        <li></li>



                    </ul>






                </div>
            </div>

            </div>
            <Planet />

        <SocialNetworks />
  
        </div>      
    );
        
        };

        export default Contact;
    