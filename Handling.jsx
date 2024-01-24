import React, { useState } from 'react';

const Handling = () => {
    const[Items,setItem] = useState([]);
    const [count,setCount]=useState(0)
    const addItem = () =>{
        setItem([
            ...Items,
            {
                id:Items.length,
                value:setCount(count+1)
            }
        ]);
    }
    return (
        <div>
            <h1> With Arrays</h1>
            {Items.map((i)=>{
                return <li key={i.id} >{i.value}</li>
            })}
            <button onClick ={addItem}>Add</button>
        </div>
    );
};

export default Handling;