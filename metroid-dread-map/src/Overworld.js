import './Overworld.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import Samus from './images/Samus.jpg'
import Artaria from './Areas/artaria';
import Cataris from './Areas/cataris';
import Dairon from './Areas/dairon';
import Ghavoran from './Areas/Ghavoran';
import Burenia from './Areas/Burenia';
import Ferenia from './Areas/Ferenia';
import Elun from './Areas/Elun';
import Hanubia from './Areas/Hanubia';
import Itorash from './Areas/Itorash';
import AreaSelection from './AreaSelection';

function Overworld(){
 
    
    return (
        <div>
            <section className="mapContainer">
                <Router>
                    <Switch>
                        <Route exact path ="/Metroid-Dread-Map" component={AreaSelection}/>
                        <Route exact path ="/Metroid-Dread-Map/Artaria" component = {Artaria}/>
                        <Route exact path ="/Metroid-Dread-Map/Cataris" component = {Cataris}/>
                        <Route exact path ="/Metroid-Dread-Map/Dairon" component = {Dairon}/>
                        <Route exact path ="/Metroid-Dread-Map/Ghavoran" component = {Ghavoran}/>
                        <Route exact path ="/Metroid-Dread-Map/Burenia" component = {Burenia}/>
                        <Route exact path ="/Metroid-Dread-Map/Ferenia" component = {Ferenia}/>
                        <Route exact path ="/Metroid-Dread-Map/Elun" component = {Elun}/>
                        <Route exact path ="/Metroid-Dread-Map/Hanubia" component = {Hanubia}/>
                        <Route exact path ="/Metroid-Dread-Map/Itorash" component = {Itorash}/>
                    </Switch>
                    <Link to="/Metroid-Dread-Map/" id="back"><i className="fas fa-arrow-left"></i></Link>
                </Router>      
            </section>
        </div>
    );
}


export default Overworld;
