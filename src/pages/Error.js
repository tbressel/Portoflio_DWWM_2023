import React from 'react';
import Canvas from '../components/error/Canvas';




const Error = () => {
    return (
        <div className='error'>


            <div className="erreur-content">
                <div className="erreur-content-retour">
                    <a href="/home">
                        <span>Retour à l'Accueil</span>
                    </a>
                </div>
                <div className="erreur-content-text">
                    <h4></h4>
                    <h3>Cette page ou ce fichier n'existe pas !</h3>
                </div>


                <div className='canvas-container'>
                    <Canvas />
                </div>

            </div> 
        </div>
    );
};

export default Error;