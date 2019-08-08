import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import { listKick } from '../apiservice';

function List(){
    const [ kicks, setKicks ] = useState([]);

    useEffect(() => {
        listKick().then(res => {
            setKicks(res.data);
        });
    }, []);
    return (
        <div className="container">
            <h1 className="text-center">List</h1>
            <ul className="list-group">
                {kicks.map(kick => (
                    <NavLink key={kick.id} to={`/detail/${kick.id}`}>
                <li className="list-group-item">{kick.blurb}</li>
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}

export default List;