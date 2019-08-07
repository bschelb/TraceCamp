import React, { useState, useContext } from 'react';
import { BlogContext } from "../components/blog_context";


function Form(props) {

    const [ list, setList ] = useContext(BlogContext);
    const [ value, setValue ] = useState("");
    const [ value2, setValue2 ] = useState("");
    

    function handleChange(event) {
        setValue(event.target.value);
    }
    function handleChange2(event) {
        setValue2(event.target.value);
    }

function handleSubmit(event) {
    event.preventDefault();
    setList(list.concat([{title: value, body: value2}]))
    setValue("");
    setValue2("");
    
}
return (
    <div>
        <h1>Enter Your Blog Post</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add Title" value={value} onChange={handleChange} />
            <input type="text" placeholder="Add Body" value={value2} onChange={handleChange2} />
            <input type="submit"/>
        </form>
    </div>
);
}
export default Form;


// {(e) => setTitle(e.target.value)}
// {(e) => setBody(e.target.value)}