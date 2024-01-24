import React,{useState} from 'react';

const Add = () => {
    const [val,setVal]=useState(0)
    const Increment=()=>{
        setVal(val+1)

    }
    const Decrement=()=>{
        setVal(val-1)
    }
    const Message=()=>{
        setVal('Value incremented and Decremented successfully')
    }

    return (
        <div>
            
            <h1>count:{val}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Message}>Show</button>
        </div>
    );
};

export default Add;