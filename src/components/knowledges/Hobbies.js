import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobby'>
            <div className="hobby-content">
                <ul>
                    <li>
                        <img src="./medias/gamepad-solid.svg" alt="icn-game" />
                        <span>Jeux vidéos</span>
                    </li>
                    <li>
                        <img src="./medias/guitar-solid.svg" alt="icn-guitar" />
                        <span>Guitare</span>
                    </li>
                    <li>
                        <img src="./medias/person-skating-solid.svg" alt="icn-roller" />
                        <span>Roller</span>
                    </li>
                    <li>
                        <img src="./medias/person-running-solid.svg" alt="icn-run" />
                        <span>Footing</span>
                    </li>
                    <li>
                        <img src="./medias/person-swimming-solid.svg" alt="icn-swim" />
                        <span>Natation</span>
                    </li>
                    <li>
                        <img src="./medias/laptop-code-solid.svg" alt="icn-code" />
                        <span>Coder en assembleur Z80 (Amstrad)</span>
                    </li>
                </ul>

            </div>
            
        </div>
    );
};

export default Hobbies;