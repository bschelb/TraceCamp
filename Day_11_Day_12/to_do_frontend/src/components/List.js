import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { listofLists } from '../apiservice';

function DisplayLists(){
    const [ lists, setLists ] = useState([]);

    useEffect(() => {
        listofLists().then(res => {
            setLists(res.data);
        });
    }, []);

    return (
        <div className="container">
            <h1 className="text-center">Your ToDo Lists</h1>
            <ul className="list-group">
                {lists.map(list => (
                    <NavLink key={list.id} to={`/detail/${list.id}`}>
                <li className="list-group-item">{list.list_name}</li>
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}
export default DisplayLists;



























// import ListContext from './ListContext';

// function List() {
//     const [ list, setList ] = useContext(ListContext);
//     return(
//         <div>
//             {list.map(
//                 (list) => <div key={list["todolist"][0]["listtitle"]}> 
//                 {list["todolist"][0]["listtitle"]} {list["todolist"][0]["listitems"][0]["listitemcontent"]} 
//                 </div>
//             )}
//         </div>
//     );
// };

// export default List;