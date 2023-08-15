import React from 'react';
import { NavLink } from 'react-router-dom';


const Sites = () => {
    return (
 <>
            <div className='sites-container'>

                <div className='sites-container__header'>
                    <h4>PORTFOLIO</h4>
                    <p>
                    
                    </p>
                </div>


                



                <div className='sites-container__images'>
                <figure className='site'>
                    <h3>
                        Développeur & Integrateur
                    </h3>
                    <figcaption>
                        Technologie : HTML / CSS / Javascript<br/>
                        Framework / Librairie : Bootstrap <br/><br/>
                        Contexte : Travail réalisé à Créative Formation. A partir d'une maquette de notre choix, travail d'intégration et d'utilisation de la librairie Bootstrap<br /><br />
                        <span>
                        Dernière mise à jour : <time dateTime='2023-08-11'>15-08-2023</time> <br/>
                        </span>
                        <a className='url' href='https://www.thomas-bressel.com/developpeur' alt="Développeur & Integrateur" target="_blank">https://www.thomas-bressel.com/developpeur</a>                    
                    </figcaption>

                    <div class="integration">            
                        <iframe src="https://www.thomas-bressel.com/developpeur"></iframe>
                    </div>
                   
                </figure>

                <figure className='site'>
                    <h3>
                        Deklic
                    </h3>
                    <figcaption>
                        Technologie : HTML / CSS / Javascript<br/>
                        Framework / Librairie : Bootstrap <br/><br/>
                        Contexte : Travail réalisé à Créative Formation. A partir d'une maquette figma et selon les instructions du clients, je devais produire cette page avec 2 points de responsivités et intégrer un élement Javascript pré codé, transmit par notre formateur. J'ai recodé mon propre compte à rebours et ajouté un 3eme points de responsivité. Cette page a été refaite avec en partie Bootstrap.<br />
                        Technologie : HTML / CSS / Javascript
                        Travail d'intégration d'une Landing Page, avec des animations et un compte à rebours. Travail réalisé à partir d'une maquette Figma, en html / CSS et Javascript<br />
                        <span>
                        Dernière mise à jour : <time dateTime='2023-08-11'>11-08-2023</time> <br/>
                        </span>
                        <a className='url' href='https://www.thomas-bressel.com/deklic' alt="Deklic" target="_blank">https://www.thomas-bressel.com/deklic</a>                    
                    </figcaption>

                    <div class="integration">            
                        <iframe src="https://www.thomas-bressel.com/deklic"></iframe>
                    </div>
               
                </figure>


                <figure className='site'>
                    <h3>
                        Galan Ciaga
                    </h3>
                    <figcaption>Technologie : HTML / CSS / Javascript<br/>
                        Framework / Librairie : Bootstrap <br/><br/>
                        Contexte : Intégration 'mobile first' basé sur le modèle d'un site de mode. Menu mobile à tiroirs sur 3 niveaux, footer à tiroirs, choix de la présentation des produits, menu à scrolling horizontal. Cette intégration à été réalisée dans le cadre de Créative formation.<br />
                        <span>
                        Dernière mise à jour : <time dateTime='2023-08-10'>10-08-2023</time> <br/>
                        </span>
                        <a className='url' href='https://www.thomas-bressel.com/galanciaga' alt="Galan Ciaga" target="_blank">https://www.thomas-bressel.com/galanciaga</a>                    
                    </figcaption>

                    <div class="integration">            
                        <iframe src="https://www.thomas-bressel.com/galanciaga"></iframe>
                    </div>
                   
                </figure>

                <figure className='site'>
                    <h3>
                        Initiative Les Arbres Verts
                    </h3>
                    <figcaption>Technologie : HTML / CSS / Javascript<br/>
                        Framework / Librairie : Bootstrap <br/><br/>
                        Contexte : Intégration 'mobile first' réalisée à partir d'une maquette fournie. Cette intégration HTML / CSS à été réalisée dans le cadre 
                        de ma formation. Elle est également disponible sur mon gitHub.<br />
                        <span>
                        Dernière mise à jour : <time dateTime='2023-07-31'>31-07-2023</time> <br/>
                        </span>
                        <a className='url' href='https://www.thomas-bressel.com/arbresverts' alt="Initiatives les arbres verts" target="_blank">www.thomas-bressel.com/arbresverts</a>                    
                    </figcaption>

                    <div class="integration">            
                        <iframe src="https://www.thomas-bressel.com/arbresverts"></iframe>
                    </div>
                   
                </figure>

                <figure className='site'>
                    <h3>
                        Thomas Bressel
                    </h3>
                    <figcaption>Technologie : CMS Joomla<br/>
                       <br/>
                        Contexte : Site concernant mes activités artistiques et pédagogique depuis 1999 <br />
                        <span>
                        Dernière mise à jour : <time dateTime='2023-06-23'>23-06-2023</time> <br/>
                        </span>
                        <a className='url' href='https://www.thomas-bressel.com/guitare' alt="Site Officiel Thomas Bressel Professeur de Guitare" target="_blank">www.thomas-bressel.com/guitare</a>                    
                    </figcaption>
                    <div class="integration">            
                        <iframe src="https://www.thomas-bressel.com/guitare"></iframe>
                    </div>

                    {/* <img src="./medias/thomasbressel-index-d.png" alt="screenshot thomasbressel" /> */}
                </figure>

                <figure className='site'>
                    <h3>
                        Le Studio 36
                    </h3>
                    <figcaption>Technologie : CMS Joomla<br/>
                       <br/>
                       Contexte : Site de la structure dans laquelle j'exerce en tant que professeur de guitare & basse <br />
                        <span>
                        Dernière mise à jour : <time dateTime='2023-06-16'>16-06-2023</time><br/>
                        </span>
                        <a className='url' href='https://www.lestudio36musiquebayeux.com/' alt="Site Officiel du Studio 36" target='_blank'>www.lestudio36musiquebayeux.com</a>                    
                    </figcaption>

                    <div class="integration">            
                        <iframe src="https://www.lestudio36musiquebayeux.com/"></iframe>
                    </div>
                </figure>


                <figure className='site'>
                    <h3>
                        Amstariga
                    </h3>
                    <figcaption>Technologie : CMS Joomla<br/>
                       <br/>
                   
                       Contexte : Site internet regroupant mes hobbies concernant les jeux vidéo rétro et le coding en assembleur sur de vieilles machines<br />
                                         
                        <span>
                        Dernière mise à jour : <time dateTime='2022-09-12'>12-09-2022</time> <br/>
                        </span>
                        
                        <a className='url' href='https://www.amstariga.net/' alt="Site Amstariga" target='_blank'>www.amstariga.net/</a>                    
                    </figcaption>
                    <div class="integration">            
                        <iframe src="https://www.amstariga.net/"></iframe>
                    </div>
                    {/* <img src="./medias/amstariga-index-d.png" alt="screenshot amstariga" /> */}
                </figure>
             

                </div>
            </div >
</>






    );
};
export default Sites;