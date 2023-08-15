import React from 'react';

const ProgressBar = (parametresRecus) => {
    console.log("les propriétées sont :",parametresRecus);
    return (
        <div className={parametresRecus.parametre2}>
            <h3>{parametresRecus.parametre2}</h3>
            <div className="annees">
                <span>Mon expérience</span>
                <span>3 ans</span>
                <span>5 ans</span>
                <span>10 ans</span>
                <span>20 ans</span>
            </div>

      
                {
                    
                    parametresRecus.parametre1.map((un_element) => {
                        console.log("map c'est  : ",parametresRecus.parametre1.map);
                        console.log("un element c'est  : ",un_element);
                        let expYears = 2;
                        
                        let Progression = un_element.exp / expYears * 100 + '%';

                        return (
                            <div key={un_element.id} className="ListLanguages">
                                <li>{un_element.value}</li>
                                <div className="barre" style={{ width: Progression }}></div>
                            </div>
                        )
                    })
                }
        
        </div>
    );
};

export default ProgressBar;




// import React from 'react';

// const Progressbar = (parametresRecus) => {

//     console.log(parametresRecus);

//     return (
//         <div className={parametresRecus.parametre2}>
//             {
//                 parametresRecus.parametre1.map((element) => {
//                     console.log(element);
//                     return (
//                         <>
//                             <div className={parametresRecus.parametre3}>

//                                 <div className={parametresRecus.parametre4}>
                                    
//                                 </div>

//                                 <div className={parametresRecus.parametre5}>
//                                     <span>{element.value}</span>
//                                 </div>
//                             </div>
//                         </>
//                     );
//                 })
//             }

//         </div>
//     );
// };

// export default Progressbar;