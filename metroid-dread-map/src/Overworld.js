import './Overworld.css'
import {useState, useEffect} from 'react';
import screwAttack from './images/ScrewAttack.jpg'
import artaria from './images/Metroid_Dread_Artaria_map.jpg'
import Burenia from './images/Burenia.jpg'
import Cataris from './images/Cataris.jpg'
import Elun from './images/Elun.jpg'
import Ferenia from './images/Ferenia.jpg'
import Ghavoran from './images/Ghavoran.jpg'
import Hanubia from './images/Hanubia.jpg'
import Itorash from './images/Itorash.jpg'
import Dairon from './images/Dairon.jpg'
import Samus from './images/Samus.jpg'

function Overworld(){
    const[currentMap, setMap] = useState(Samus);
    const[showButs, setButs] = useState(true);
    function handleClick(map){
        if(map == Samus){
            setButs(true)
        }
        else{
            setButs(false)
        }
        setMap(map);
    }   
    return (
        <div>
            <section className="mapContainer">
                <img id="map"src={currentMap} alt="currentMap"></img>
                <button className={showButs ? "hidden" : null} id="back" onClick={() => handleClick(Samus)}><i className="fas fa-arrow-left"></i></button>
                <section className={showButs ? "buttonContainer" : "hidden"}>
                    <button id="artaria" onClick={() => handleClick(artaria)}>Artaria</button>
                    <button id="Cataris" onClick={() => handleClick(Cataris)}>Cataris</button>
                    <button id="Dairon" onClick={() => handleClick(Dairon)}>Dairon</button>
                    <button id="Ghavoran" onClick={() => handleClick(Ghavoran)}>Ghavoran</button>
                    <button id="Burenia" onClick={() => handleClick(Burenia)}>Burenia</button>
                    <button id="Ferenia" onClick={() => handleClick(Ferenia)}>Ferenia</button>
                    <button id="Elun" onClick={() => handleClick(Elun)}>Elun</button>
                    <button id="Hanubia" onClick={() => handleClick(Hanubia)}>Hanubia</button>
                    <button id="Itorash" onClick={() => handleClick(Itorash)}>Itorash</button>
                </section>          
            </section>
        </div>
    );
}

export default Overworld;
