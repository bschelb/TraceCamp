import React, {useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import getPlanets from './worker.js';

function App() {

  const [ page_number, loadMoreData ] = useState(1)
  const [ planetData, setPlanetData ] = useState([])

  useEffect(() => {
    console.log("This is useEffect: ", page_number);
    getPlanets(page_number).then(
      (response) =>{
        setPlanetData(response.data.results.map(
          (value) => [value.name, value.population, value.orbital_period]))
    })
    console.log(planetData)
  }, [page_number])




  return (
    <div className="App">
      <h1>List of Star Wars Planets, Their Populations & Orbital Period</h1>
      {planetData.map((value) => <div> <li>  
        <b> Planet Name: </b> {value[0]} 
        <b> Planet Population: </b> {value[1]} 
        <b> Orbital Period: </b> {value[2] + " Days"} </li> 
      </div>)}
      <b>7 Total Pages: </b>
     <input value = { page_number } type="number" id="page_num" onChange={ (e) => loadMoreData(e.target.value) } max='7' min='1'/>
    </div>
  );
}

export default App;