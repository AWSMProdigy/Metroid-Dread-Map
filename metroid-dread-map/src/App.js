import './App.css';
import Overworld from './Overworld';
import SequenceBreaking from './SequenceBreaking';


function App() {
  return ( 
    <div>
      <header>
        {/* <div className="box"><img src={screwAttack} alt="screwAttack"/></div> */}
        <div className="box"><h1>Planet ZDR</h1></div>
        <div className="box">
          <nav>
            <a href="https://metroid.nintendo.com/?cid=N1087-01:ch=pdpd">Metroid Page</a>
            <a href="#map">Map</a>
            <a href="#sequenceBreaking">Sequence Breaking</a>
          </nav>
        </div>
      </header>
    <Overworld/>
    <SequenceBreaking/>
    </div>
    
  );
}

export default App;
