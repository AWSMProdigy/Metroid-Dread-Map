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
                        <Route exact path ="/" component={AreaSelection}/>
                        <Route exact path ="/Artaria" component = {Artaria}/>
                        <Route exact path ="/Cataris" component = {Cataris}/>
                        <Route exact path ="/Dairon" component = {Dairon}/>
                        <Route exact path ="/Ghavoran" component = {Ghavoran}/>
                        <Route exact path ="/Burenia" component = {Burenia}/>
                        <Route exact path ="/Ferenia" component = {Ferenia}/>
                        <Route exact path ="/Elun" component = {Elun}/>
                        <Route exact path ="/Hanubia" component = {Hanubia}/>
                        <Route exact path ="/Itorash" component = {Itorash}/>
                    </Switch>
                    <Link to="/" id="back"><i className="fas fa-arrow-left"></i></Link>
                </Router>      
            </section>
        </div>
    );
}


export default Overworld;
