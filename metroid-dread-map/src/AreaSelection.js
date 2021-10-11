import './Overworld.css'

import { Link } from 'react-router-dom'
import Samus from './images/Samus.jpg'


function AreaSelection(){

    return(
        <>
        <img id="map"src={Samus} alt="areaSelection"></img>
        <section className="buttonContainer">
            <Link to="/Metroid-Dread-Map/Artaria" id="artaria">Artaria</Link>
            <Link to="/Metroid-Dread-Map/Cataris" id="Cataris">Cataris</Link>
            <Link to="/Metroid-Dread-Map/Dairon" id="Dairon">Dairon</Link>
            <Link to="/Metroid-Dread-Map/Ghavoran" id="Ghavoran">Ghavoran</Link>
            <Link to="/Metroid-Dread-Map/Burenia" id="Burenia">Burenia</Link>
            <Link to="/Metroid-Dread-Map/Ferenia" id="Ferenia">Ferenia</Link>
            <Link to="/Metroid-Dread-Map/Elun" id="Elun">Elun</Link>
            <Link to="/Metroid-Dread-Map/Hanubia" id="Hanubia">Hanubia</Link>
            <Link to="/Metroid-Dread-Map/Itorash" id="Itorash">Itorash</Link>
        </section>    
        
        </>
    )      
}

export default AreaSelection;