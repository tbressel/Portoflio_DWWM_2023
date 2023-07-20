import React from 'react';


const SocialNetworks = () => {
    return (
        <div className='socialnetworks'>
            <ul className='socialnetworks-content'>
                <li>
                    <a href="https://www.linkedin.com/in/tbressel-dev/" alt="linkedin" target='_blank'>

                        <img src="./medias/linkedin.svg" alt="icn-linkedin" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/tbressel" alt="github" target='_blank'>
                        <img src="./medias/github.svg" alt="icn-github" />
                    </a>
                </li>
                <li>
                    <a href="https://zisquier.itch.io/" alt="itchio" target="_blank">
                        <img src="./medias/itch-io.svg" alt="icn-itchio" />
                    </a>
                </li>
                {/* <li>
                    <a href="#" alt="no link">
                        <img src="./medias/square-facebook.svg" alt="icn-facebook" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="./medias/discord.svg" alt="icn-discord" />
                    </a>
                </li> */}
            </ul>

        </div>
    );
};

export default SocialNetworks;