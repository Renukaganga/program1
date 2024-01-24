import React, { useState } from 'react';

const Hooks = () => {
    const[Count, setCount]=useState(0)
    const[msg , setmsg] = useState('do u know?')
    const Update = () =>{
        setCount(Count+1) 
    };
    const Update2 = () =>{
        setCount(Count-1) 
    };
    const Updatetext = () =>{
        setmsg('you are monkey')

    };
    return (
        <div>
            <h1>Count:{Count}</h1>
            <button onClick={Update}>increment</button> 
            <button onClick={Update2}>decrement</button>
            <h2>{msg}</h2>
            <button onClick={Updatetext}>truth</button>
        </div>
    );
};

export default Hooks;