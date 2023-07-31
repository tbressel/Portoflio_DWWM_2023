import React from 'react';
import Navigation from '../components/Navigation';
import SocialNetworks from '../components/SocialNetworks';
import Cube from '../components/home/Cube';


const Home = () => {
  return (
    <div className='home'>
      <Navigation />

       

      <div className="home-content">

      <div className='home-anim'>

        <div className="home-content-text">
          <h1 className='label'>
            Thomas, <br></br>
            Développeur Web, <br></br>
            & Web Mobile<span></span></h1>
          <div className='home-content-link'>
            <a href="./medias/CV_2023_DWWM.pdf" alt="Curriculum Vitae" target="_blank">
              <span className="home-content-pdf">Télécharger le CV</span>
            </a>
          </div>
        </div>
        <h4 className='home-subtitle'>Apprenti développeur full stack</h4>
        <Cube />
        </div>
        </div>
      <SocialNetworks />
    </div>


);
};


export default Home;
