import React, { useState, useEffect, useContext } from 'react';
import { createList } from '../apiservice';
import { Redirect } from 'react-router-dom';
import TodosContext from './ListContext';

function Form(props) {
    const [ todo, setTodo ] = useState('');
    const [ todoList, setTodoList ] = useState('');
    const [ selectedList, setSelectedList ] = useState('');
    // const [ list, setList ] = useState([]);
    const [ redirecturl, setRedirectUrl ] = useState(false)
    
    const {
        state: todoLists,
        addList,
        removeList,
        addListItem,
        removeListItem,
    } = useContext(TodosContext);

    // useEffect(() => {
    //     if(props.form_data){
    //         setValue(props.form_data)
    //     }
    // }, []);
    
    // const sendData = event => {
    //     const payload = value;
    //     createList(payload).then((res) => {
    //         setRedirectUrl(true)
    //     })
    // }

    // const addItem = event => {
    //     event.preventDefault();
    //     setValue(value.concat(value));
    //     setValue("");
    // }

    // const handleRemove = (event, id) => {
    //     const newList = value.filter((item, index) => index !== id);
    //     setValue(newList);
    // }

    // const handleChange = event => {
    //     setValue(event.target.value);
    // }

    // // const handleSubmit = event => {
    // //     if (event) event.preventDefault();
    // //   };

    // function Task(props) {
    //     function handleClick() {
    //         props.remove(props.id)
    //     }
    //     return (
    //         <div>
    //             <button onClick={handleClick}>Complete</button>{props.listitems} 
    //         </div>
    //     );
    // }
    return (
        <div>
            <label htmlFor="todo-list">Todo List: </label>
            <input
                id="todo-list"
                type="text"
                value={todoList}
                onChange={event => setTodoList(event.target.value)}
            />
            <button onClick={addList}>Add List</button>
            
            <pre>{JSON.stringify(todoLists, null, 2)}</pre>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
        </div>
    )
}
export default Form;
// listitems ? value.listitems.split(", ").