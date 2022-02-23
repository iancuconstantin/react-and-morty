import React, { useState } from "react";
import "./App.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Characters from "./Components/Characters";
import Locations from "./Components/Locations";

function App() {
  const [isCharactersShown, setIsCharactersShow] = useState(false);
  const [isLocationsShown, setIsLocationsShown] = useState(false);

  const setCharacters = () =>{
    setIsCharactersShow(true);
    setIsLocationsShown(false)
  }
  const setLocations = () =>{
    setIsCharactersShow(false);
    setIsLocationsShown(true)
  }
  
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center">
      <img id="first" src="https://images-na.ssl-images-amazon.com/images/I/91MteSqsrJL.jpg" className="rounded mt-3" alt="img"/>
      <div className="buttons d-flex justify-content-center gap-5 mt-4">
        <Button className="btn" variant="success" onClick={setCharacters}>Characters</Button>
        <Button className="btn" variant="success" onClick={setLocations}>Locations</Button>
      </div>
      <div className="content mt-4">
        {isCharactersShown &&  <Characters/>}
        {isLocationsShown && <Locations/>}
      </div>
    </div>
  )
}

export default App;
