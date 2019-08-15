import React, { useState, useEffect } from 'react';
import Form from "./Form";
import { detailList } from "../apiservice";

function Update(props){
    const [ list, setList ] = useState({});

    React.useEffect(() => {
        const id = props.match.params.id;
        detailList(id).then((res) => {
            console.log(res)
            setList(res.data);
        });
    }, [props.match.params.id]);
    return (
        <div className="container">
            <h1 className="text-center">Update Data Entry {list.id}</h1>
            { list.id !== undefined ? <Form form_data={list}/> : null}
        </div>
    )
}

export default Update;