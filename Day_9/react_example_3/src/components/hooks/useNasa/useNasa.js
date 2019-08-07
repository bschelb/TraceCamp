import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const api_key = 'Pu3y5UmxvKUgrXjUihnHWEdBMvVc68AHOyGeQFhV'

const useNasa = date => {
    const [ data, setData] = React.useState({})
    const [ loading, setLoading ] = React.useState(true);
    const [ error, setError ] = React.useState(false);

    React.useEffect(() => {
        setError(false);
        setLoading(true);
        Axios
        .get(
            `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${api_key}`)
        .then(response => {
            setData(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
            setError(true);
        });
    }, [date]);
    
    return {
        data,
        loading,
        error
    };
};

// const Thumbnail = () => {
//     const {
//         data,
//         loading,
//         error,
//     } = useNasa(date)
// }
export default useNasa;