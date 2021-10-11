import './App.css';
import Overworld from './Overworld';


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
    <section id="sequenceBreaking">
      <h1>Known Sequence Breaks</h1>
      <div>
        <h2>Early grapple</h2>
        <p>You gotta do the thing</p>
      </div>
      <div>
        <h2>Early bombs</h2>
        <p>You gotta do the thing</p>
      </div>
      <div>
        <h2>Early Super Missle</h2>
        <p>You gotta do the thing</p>
      </div>
      <div>
        <h2>Early Gravity Suit</h2>
        <p>You gotta do the thing</p>
      </div>
      <div>
        <h2>Early Cross Bomb</h2>
        <p>You gotta do the thing</p>
      </div>
      <div>
        <h2>Early Green Teleporter</h2>
        <p>You gotta do the thing</p>
      </div>
    </section>
    </div>
    
  );
}

export default App;
