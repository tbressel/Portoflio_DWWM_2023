import React, { Component } from 'react';
import Progressbar from './Progressbar';

class Languages extends Component {

// Section attrubuts
Tbl_Languages = [
    {id: 1, value: "Html", exp:1.9},
        {id: 2, value: "Css", exp:1.9},
        {id: 3, value: "Javascript", exp:1.3}

];

Tbl_Frameworks = [
    {id: 1, value: "React.js", exp:0.5},
        {id: 2, value: "Laravel", exp:0.5},
        {id: 3, value: "Bootstrap", exp:0.5}

];



// Section méthodes
    render() {

        let Languages = this.Tbl_Languages;
        let Frameworks = this.Tbl_Frameworks;

        return (
            <>
            <div className='languages'>
                <Progressbar parametre1={Languages} parametre2="languages" parametre3="languages-content-bar" parametre4="bar" parametre5="languages-name" />
            </div>
            <div className='frameworks'>
                <Progressbar parametre1={Frameworks} parametre2="frameworks" parametre3="frameworks-content-bar" parametre4="bar" parametre5="frameworks-name" />
            </div>
            </>
        );
    }
}

export default Languages;