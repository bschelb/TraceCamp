import React, {useState} from 'react';

function Form() {

        const [ name, setName ] = useState("John Wick");
        const [ status, setStatus ] = useState("Dog");
        const [ value, setValue ] = useState("");
    
        function handleChange(event) {
            setValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setName()
        setStatus(value);
        setValue("");
    }
    return (
        <div>
            <h1>I AM A FORM</h1>
            <h2>{name}</h2>
            <h3>{status}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Add Name" value={name} onChange={ (event) => setName(event.target.value)}/>
                <input type="text" placeholder="Change Status" value={value} onChange={handleChange}/>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default Form;