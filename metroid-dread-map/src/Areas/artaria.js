import artariaMap from '../images/Metroid_Dread_Artaria_map.jpg'
import { Tooltip } from '../Tools/Tooltip';
import screwAttack from '../images/ScrewAttack.jpg'
import './artaria.css'

function artaria(){
    return(
        <>
            <img id="map"src={artariaMap} alt="ArtariaMap"></img>
            <section className="buttonContainer">
                <Tooltip src={screwAttack} id="energyRefill1" text="Use this to refill energy" alt="energyRefill1"></Tooltip>
                <Tooltip src={screwAttack} id="ammoRefill1" text="Use this to refill missiles and power bombs" alt="ammoRefill1"></Tooltip>
                <Tooltip src={screwAttack} id="energyTank1" text="Increase energy by 100" alt="energyTank1"></Tooltip>
                <Tooltip src={screwAttack} id="saveStation1" text="Save your file here" alt="saveStation1"></Tooltip>
                <Tooltip src={screwAttack} id="missilePickup1" text="Increase missile count by 2" alt="missilePickup1"></Tooltip>
                <Tooltip src={screwAttack} id="missilePickup2" text="Increase missile count by 2" alt="missilePickup2"></Tooltip>
                <Tooltip src={screwAttack} id="missilePickup3" text="Increase missile count by 2" alt="missilePickup3"></Tooltip>
                <Tooltip src={screwAttack} id="energyPiece1" text="Collect 4 to increase energy by 100npm" alt="energyPiece1"></Tooltip>
            </section>
        </>
    )      
}

export default artaria;