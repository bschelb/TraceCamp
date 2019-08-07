import React, { useState, useEffect } from 'react';

function Counter(){
    const [Number, setNumber] = useState(0);
    function handleClick(){
        //const newNumber = Math.pow(Number + 1, 3);
        setNumber(Math.pow(Number + 1, 3));
    }

    useEffect(() => {
        document.title = `${Number}`;
    });
    return (
    <div>
    <h1>{Number}</h1>
    <button onClick={handleClick}>Add One, then bring it to the power of 3</button>
    <button onClick={() => setNumber(Number -1)}>Sub One</button>
    </div>);
}
export default Counter;