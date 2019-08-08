import React, { useState, useEffect } from 'react';
import Form from "./Form";
import { getKick } from "../apiservice";

function Update(props){
    const [ kick, setKick ] = useState({});

    React.useEffect(() => {
        const id = props.match.params.id;
        getKick(id).then((res) => {
            console.log(res)
            setKick(res.data);
        });
    }, [props.match.params.id]);
    return (
        <div className="container">
            <h1 className="text-center">Update Data Entry {kick.id}</h1>
            { kick.id !== undefined ? <Form form_data={kick}/> : null}
        </div>
    )
}

export default Update;