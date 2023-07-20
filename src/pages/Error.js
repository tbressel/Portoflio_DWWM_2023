import React from 'react';
import Cube from '../components/home/Cube';




const Error = () => {
    return (
        <div className='error'>


            <div className="erreur-content">
                <div className="erreur-content-retour">
                    <a href="/home">
                        <span>Accueil</span>
                    </a>
                </div>
                <div className="erreur-content-text">
                    <h4>Fatal Error : 666</h4>
                    <h3>Cette page ou ce fichier n'existe pas</h3>
                </div>


            </div> 
        </div>
    );
};

export default Error;