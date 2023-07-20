import React, { Component } from 'react';
import Progressbar from './Progressbar';

class Languages extends Component {

// Section attrubuts
Tbl_Languages = [
    {id: 1, value: "Html / Css", exp:1.7},
        {id: 2, value: "Javascript", exp:1.1},
        {id: 3, value: "Php / Sql", exp:0.9},
        // {id: 4, value: "Java", exp:0},
        // {id: 5, value: "C", exp:1.1},
        // {id: 6, value: "Assembleur", exp:1.2},

];

Tbl_Frameworks = [
    {id: 1, value: "React / Sass", exp:1.1},
        {id: 2, value: "Node.js", exp:0.9},
        {id: 3, value: "jQuery", exp:1.1},
        // {id: 4, value: "Angular", exp:0.1},
];



// Section méthodes
    render() {

        let Languages = this.Tbl_Languages;
        let Frameworks = this.Tbl_Frameworks;

        return (
            <>
            <div className='languages'>
                <Progressbar parametre1={Languages} parametre2="languages-content" parametre3="languages-content-bar" parametre4="bar" parametre5="languages-name" />
            </div>
            <div className='frameworks'>
                <Progressbar parametre1={Frameworks} parametre2="frameworks-content" parametre3="frameworks-content-bar" parametre4="bar" parametre5="frameworks-name" />
            </div>
            </>
        );
    }
}

export default Languages;