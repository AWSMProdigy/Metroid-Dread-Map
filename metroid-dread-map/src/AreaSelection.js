import './Overworld.css'

// import { Link } from 'react-router-dom'
// import Samus from './images/Samus.jpg'
import DelayLink from 'react-delay-link';

function AreaSelection(){

    function zoom(target){
        var background = document.getElementsByClassName("zoom");
        var parentRect = document.getElementsByClassName("buttonContainer")[0].getBoundingClientRect();
        var artaraiLink = document.getElementById(target);
        var rect = artaraiLink.getBoundingClientRect();
        console.log(rect.left + "\n" + rect.bottom);
        console.log(parentRect.left + "\n" + parentRect.bottom);
        console.log(background[0].style.backgroundPosition);
        var vw = background[0].clientWidth;
        var vh = background[0].clientHeight;
        background[0].classList.add("zoomAnim")
        var center = {
            width: vw/2,
            height: vh/2
        }
        var newCenter = {
            width: center.width-(artaraiLink.offsetLeft) * 2,
            height: center.height-(artaraiLink.offsetTop) * 2
        }
        background[0].style.backgroundPosition = newCenter.width.toString() + "px " + newCenter.height.toString() + "px";
    }



    return(
        <>
        <div className="zoom">
        </div>
        <section className="buttonContainer">
            <div id="artaria">
                <DelayLink delay={500} clickAction={() => zoom("artaria")} to="/Metroid-Dread-Map/Artaria" replace={false}><span id="artariaSpan">Artaria</span></DelayLink>
            </div>
            <div id="Cataris">
                <DelayLink delay={500} clickAction={()=> zoom("Cataris")} to="/Metroid-Dread-Map/Cataris" replace={false}><span id="catarisSpan">Cataris</span></DelayLink>
            </div>
            <div id="Dairon">
                <DelayLink delay={500} clickAction={()=> zoom("Dairon")} to="/Metroid-Dread-Map/Dairon" replace={false}><span id="daironSpan">Dairon</span></DelayLink>
            </div>
            <div id="Burenia">
                <DelayLink delay={500} clickAction={()=> zoom("Burenia")} to="/Metroid-Dread-Map/Burenia" replace={false}><span id="bureniaSpan">Burenia</span></DelayLink>
            </div>
            <div id="Ghavoran">
                <DelayLink delay={500} clickAction={()=> zoom("Ghavoran")} to="/Metroid-Dread-Map/Ghavoran" replace={false}><span id="ghavoranSpan">Ghavoran</span></DelayLink>
            </div>
            <div id="Ferenia">
                <DelayLink delay={500} clickAction={()=> zoom("Ferenia")} to="/Metroid-Dread-Map/Ferenia" replace={false}><span id="fereniaSpan">Ferenia</span></DelayLink>
            </div>
            <div id="Elun">
                <DelayLink delay={500} clickAction={()=> zoom("Elun")} to="/Metroid-Dread-Map/Elun" replace={false}><span id="elunSpan">Elun</span></DelayLink>
            </div>
            <div id="Hanubia">
                <DelayLink delay={500} clickAction={()=> zoom("Hanubia")} to="/Metroid-Dread-Map/Hanubia" replace={false}><span id="hanubiaSpan">Hanubia</span></DelayLink>
            </div>
            <div id="Itorash">
                <DelayLink delay={500} clickAction={()=> zoom("Itorash")} to="/Metroid-Dread-Map/Itorash" replace={false}><span id="itorashSpan">Itorash</span></DelayLink>
            </div>
        </section>     
        
        </>
    )      
}

export default AreaSelection;