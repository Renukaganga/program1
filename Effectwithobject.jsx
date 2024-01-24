import React, { useState } from 'react';

const Effectwithobject = () => {
    const[Student, setStudent] = useState({
        name:'ABC',
        college :'SVECW'
    })
    const change =()=> {
        setStudent({name:'haha',college:'Shri Vishnu'})
    }
    return (
        <div>
            <h3>{Student.name}</h3>
            <h3>{Student.college}</h3>
            <button onClick={change}>Change</button>
        </div>
    );
};

export default Effectwithobject;