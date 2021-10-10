import './App.css';
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
import {useState, useEffect} from 'react';

function App() {
  const[currentMap, setMap] = useState(artaria);

  return ( 
    <div>
      <header>
      <div className="box"><img src={screwAttack} alt="screwAttack"/></div>
      <div className="box"><h1>Planet ZDR</h1></div>
      <div className="box"><a href="https://metroid.nintendo.com/?cid=N1087-01:ch=pdpd">Metroid Page</a></div>
    </header>
    <section>
      <img src={currentMap} alt="Kekw"></img>
    </section>
    <section>
      <ul>
        <button onClick={() => setMap(artaria)}>Artaria</button>
        <button onClick={() => setMap(Cataris)}>Cataris</button>
        <button onClick={() => setMap(Dairon)}>Dairon</button>
        <button onClick={() => setMap(Ghavoran)}>Ghavoran</button>
        <button onClick={() => setMap(Burenia)}>Burenia</button>
        <button onClick={() => setMap(Ferenia)}>Ferenia</button>
        <button onClick={() => setMap(Elun)}>Elun</button>
        <button onClick={() => setMap(Hanubia)}>Hanubia</button>
        <button onClick={() => setMap(Itorash)}>Itorash</button>
      </ul>
    </section>
    </div>
    
  );
}

export default App;
