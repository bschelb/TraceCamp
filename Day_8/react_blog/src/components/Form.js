// import React, { useState, useContext } from 'react';
// import { BlogContext } from "..components/blog_list";


// function Form(props) {

//     const [ title, setTitle ] = useState("");
//     const [ body, setBody ] = useState("");
//     const [ list, setList ] = useContext(BlogContext);
//     // const [ value, setValue ] = useState("");
//     // const [ value2, setValue2 ] = useState("");
    

//     // function handleChange(event) {
//     //     setValue(event.target.value);
//     // }
//     // function handleChange2(event) {
//     //     setValue2(event.target.value);
//     // }

// function handleSubmit(event) {
//     event.preventDefault();
//     setTitle(value);
//     setBody("");
//     setValue("");
//     setValue2("");
// }
// return (
//     <div>
//         <h1>Blog Post</h1>
//         <h2>{title}</h2>
//         <h3>{body}</h3>
//         <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Add Title" value={value} onChange={handleChange} />
//         <input type="text" placeholder="Add Body" value={value2} onChange={handleChange2} />
//             <input type="submit"/>
//         </form>
//     </div>
// );
// }
// export default Form;