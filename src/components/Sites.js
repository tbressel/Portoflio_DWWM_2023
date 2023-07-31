import React from 'react';
import { NavLink } from 'react-router-dom';


const Sites = () => {
    return (
 <>
            <div className='sites-container'>

                <div className='sites-container__header'>
                    <h4>PORTFOLIO</h4>
                    <p>
                    Voici une liste des sites internet les plus récents (réalisés entre 2017 et 2023) utilisant le CMS Joomla. Certains de ces sites ont été conçus pendant mon ancienne carrière pour répondre aux besoins des structures où j'ai travaillé. D'autres ont été créés dans le cadre de mes activités artistiques et pédagogiques. En outre, j'ai également réalisé des sites en lien avec mes hobbies, notamment dans le domaine du code assembleur sur d'anciennes machines.
                    </p>
                </div>


                



                <div className='sites-container__images'>

                <figure className='site2'>
                    <h3>
                        Initiative Les Arbres Verts
                    </h3>
                    <figcaption>
                        Intégration 'mobile first' réalisée à partir d'une maquette fournie. Cette intégration HTML / CSS à été réalisée dans le cadre 
                        de ma formation. Elle est également disponible sur mon gitHub.<br />
                        <span>
                        Dernière mise à jour : <time dateTime='2023-07-31'>31-07-2023</time> <br/>
                        </span>
                        <a className='url' href='https://www.thomas-bressel.com/arbresverts' alt="Initiatives les arbres verts" target="_blank">www.thomas-bressel.com/arbresverts</a>                    
                    </figcaption>
                    <img src="./medias/InitiativesLesArbresVerts.png" alt="screenshot arbres verts" />
                </figure>

                <figure className='site1'>
                    <h3>
                        Thomas Bressel
                    </h3>
                    <figcaption>
                        Site concernant mes activités artistiques et pédagogique depuis 1999 <br />
                        <span>
                        Dernière mise à jour : <time dateTime='2023-06-23'>23-06-2023</time> <br/>
                        </span>
                        <a className='url' href='https://www.thomas-bressel.com/guitare' alt="Site Officiel Thomas Bressel Professeur de Guitare" target="_blank">www.thomas-bressel.com/guitare</a>                    
                    </figcaption>
                    <img src="./medias/thomasbressel-index-d.png" alt="screenshot thomasbressel" />
                </figure>

                <figure className='site2'>
                    <h3>
                        Le Studio 36
                    </h3>
                    <figcaption>
                        Site de la structure dans laquelle j'exerce en tant que professeur de guitare & basse <br />
                        <span>
                        Dernière mise à jour : <time dateTime='2023-06-16'>16-06-2023</time><br/>
                        </span>
                        <a className='url' href='https://www.lestudio36musiquebayeux.com/' alt="Site Officiel du Studio 36" target='_blank'>www.lestudio36musiquebayeux.com</a>                    
                    </figcaption>
                    <img src="./medias/studio36-index.png" alt="screenshot studio36" />
                </figure>


                <figure className='site3'>
                    <h3>
                        Amstariga
                    </h3>
                    <figcaption>
                   
                        Site internet regroupant mes hobbies concernant les jeux vidéo rétro et le coding en assembleur sur de vieilles machines<br />
                                         
                        <span>
                        Dernière mise à jour : <time dateTime='2022-09-12'>12-09-2022</time> <br/>
                        </span>
                        
                        <a className='url' href='https://www.amstariga.net/' alt="Site Amstariga" target='_blank'>www.amstariga.net/</a>                    
                    </figcaption>
                    <img src="./medias/amstariga-index-d.png" alt="screenshot amstariga" />
                </figure>
             

                </div>
            </div >
</>






    );
};
export default Sites;