import './Overworld.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useState, useEffect} from 'react';

import { Link } from 'react-router-dom'
import Samus from './images/Samus.jpg'


function AreaSelection(){

    return(
        <>
        <img id="map"src={Samus} alt="areaSelection"></img>
        <section className="buttonContainer">
            <Link to="/Artaria" id="artaria">Artaria</Link>
            <Link to="/Cataris" id="Cataris">Cataris</Link>
            <Link to="/Dairon" id="Dairon">Dairon</Link>
            <Link to="/Ghavoran" id="Ghavoran">Ghavoran</Link>
            <Link to="/Burenia" id="Burenia">Burenia</Link>
            <Link to="/Ferenia" id="Ferenia">Ferenia</Link>
            <Link to="/Elun" id="Elun">Elun</Link>
            <Link to="/Hanubia" id="Hanubia">Hanubia</Link>
            <Link to="/Itorash" id="Itorash">Itorash</Link>
        </section>    
        
        </>
    )      
}

export default AreaSelection;