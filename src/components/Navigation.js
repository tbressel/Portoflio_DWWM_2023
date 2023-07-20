import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
 <>

        <nav className='navigation'>
            <ul>
                <li>
                   <NavLink to="/home" className={( {isActive} ) => (isActive ? 'active' : 'inactive')} >                 
                    <img src="./medias/house-user-solid.svg" alt="icn-home" />
                    <span>Accueil</span>
                    
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/knowledges" className={( {isActive} ) => (isActive ? 'active' : 'inactive')}>
                        <img src="./medias/brain-solid.svg" alt="icn-knowledges" />
                    <span>Connaissances</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className={( {isActive} ) => (isActive ? 'active' : 'inactive')}>
                        <img src="./medias/photo-film-solid.svg" alt="icn-portfolio" />
                    <span>Portfolio</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={( {isActive} ) => (isActive ? 'active' : 'inactive')}>
                        <img src="./medias/address-card-solid.svg" alt="" />
                    <span>Contact</span>
                    </NavLink>
                </li>
            </ul>

        <div className='navigation-bot-section'>
        <img src="./medias/logotb-v4.png" alt='logo'/>


        </div>
        </nav>


</>






    );
};
export default Navigation;