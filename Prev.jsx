import React,{useState} from 'react';

const Prev = () => {
    const [val,setVal]=useState(0)
    const Increment=()=>{
        setVal(val+1)
        setVal(val+1)
       
    }
    return (
        <div>
            <h1>Value:{val}</h1>
            <button onClick={Increment}>Increment</button>
        </div>
    );
};

export default Prev;