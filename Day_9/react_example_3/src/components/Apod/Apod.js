import React from 'react';
import useNasa from 'components/hooks/useNasa/useNasa'

const style = {
    maxWidth: '500px',
    width: '100%',
}
function Apod({ match }) {
    const date = match.params.date;
    
    const { data, loading, error } = useNasa(date)

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>

    console.log(data);

    return (
        <div style={style}>
            <h2>{data.title}</h2>
            <em>{data.copyright}</em>
            <img style={style} src={data.url} alt={data.title}/>
            <p>{data.explanation}</p>
        </div>
    )
}

export default Apod;