import React, { useState, useEffect } from "react";
import useForm from "../hooks/useForm";
import { createKick, getKick } from "../apiservice";
import { Route, Redirect } from 'react-router-dom';

function Form(props) {
    const { values, handleSubmit, handleChange, setValues } = useForm({blurb :"", backers: 0, pledged: 0, created: ""}, sendData);
    const [ redirecturl, setRedirectUrl ] = useState(false);

    const [ loading, setLoading ] = useState(true)
    useEffect(() => {
        console.log(props)
        if(props.form_data){
            setValues(props.form_data)
            
            setLoading(false)
        }else{
            setLoading(false);
        }
}, []);

    function sendData() {
        const payload = values;
        const created = new Date();
        payload["created"] = created.toISOString();
        console.log(payload);
        createKick(payload).then((res)=> {
            console.log(res);
            setRedirectUrl(true)
        })
    }
    
    const theForm = (
        <React.Fragment>
        <form onSubmit={ handleSubmit }>
            <div className="form-group">
                <label>Blurb</label>
                <input type="text" className="form-control" name="blurb" value={ values.blurb } onChange={ handleChange }/>
            </div>
            <div className="form-group">
                <label>Backers</label>
                <input type="text" className="form-control" name="backers" value={ values.backers } onChange={ handleChange }/>
            </div>
            <div className="form-group">
                <label>Pledged</label>
                <input type="number" step="any" className="form-control" name="pledged" value={ values.pledged } onChange={ handleChange }/>
            </div>
            <input type="submit" value="Submit" className="form-control"/>
        </form>
        {redirecturl ? <Redirect to="/list" /> : null}
        </React.Fragment>
    );
    return loading ? <div>Loading</div> : theForm;
}

export default Form;