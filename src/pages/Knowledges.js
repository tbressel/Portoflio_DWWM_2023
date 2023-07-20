import React from 'react';
import Navigation from '../components/Navigation';
import SocialNetworks from '../components/SocialNetworks';
import Hobbies from '../components/knowledges/Hobbies';
import Otherskills from '../components/knowledges/Otherskills';
import Experiences from '../components/knowledges/Experiences';
import Languages from '../components/knowledges/Languages';

const Knowledges = () => {
    return (
        <div className='knowledges'>
             <Navigation />
             <div className="knowledges-content">

                <div className="knowledges-content-languages">
                {/* <h3>Languages</h3> */}
                <Languages />
                </div>



                <div className="knowledges-content-experiences">
                {/* <h3>Mes Expériences</h3> */}
                <Experiences />
                </div>

                <div className="knowledges-content-otherskills">
                <h3>Autres connaissances</h3>
                <Otherskills />
                </div>

                <div className="knowledges-content-hobbies">
                    <h3>Hobbies</h3>
                    <Hobbies />
                </div>

             </div>
             <SocialNetworks />
        </div>
    );
};

export default Knowledges;