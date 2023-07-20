import React from 'react';




const Cube = () => {
    return (
        <div className='cube'>
            <div className="container">
                <div className="container-cube">
                    <div className="container-cube-front face">
                        <p>
                            Ponctualité
                        </p>
                        <i>
                            Ponctualité
                        </i>
                    </div>
                    <div className="container-cube-back  face">
                        <p>
                            Fiabilité
                        </p>
                        <i>
                            Fiabilité
                        </i>
                    </div>

                    <div className="container-cube-left face">
                        <p>
                            Autonomie
                        </p>
                        <i>
                        Autonomie
                        </i>
                    </div>
                    <div className="container-cube-right face">
                        <p>
                            Autodidacte
                        </p>
                        <i>
                        Autodidacte
                        </i>
                    </div>
                    <div className="container-cube-top  face">
                        <p>
                            Organisation
                        </p>
                        <i>
                        Organisation
                        </i>
                    </div>
                    <div className="container-cube-bot face">
                        <p>
                            Communication
                        </p>
                        <i>
                            Communication
                        </i>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Cube;