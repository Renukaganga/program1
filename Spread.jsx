import React,{useState} from 'react';

const Spread = () => {
    const [student,setStudent]=useState({
        name:'Renuka',
        college:'svecw'
    })
    
    return (
        <div>
            <h1>Student Details</h1><br></br>
            <h2>name:{student.name}</h2><br></br>
            <h2>college:{student.college}</h2>
            <button onClick={setStudent({...student,name:'ganga'})}>Click me!</button>
        </div>
    );
};

export default Spread;