import logo from './logo.svg';
import './App.css';
import {Testimonio} from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Meet The GOATS</h1>
        <Testimonio
        nombre='Kevin De Bruyne'
        pais='Belgium'
        posicion='Attacking Midfielder'
        equipo='Manchester City'
        honores={<p>Champions League x1<br/>
        Premier League x5 <br/>
        FA Cup x2<br/>
        Carabao Cup x4</p> }
        imagen='kdb.jpg'
         />
        
        <Testimonio
        nombre={<p>Rodrigo Hernandez Cascante (<strong>Rodri</strong>)</p>}
        pais='Spain'
        posicion='Central Midfielder'
        equipo='Manchester City'
        honores={<p>Champions League x1<br/>
                Premier League x4 <br/>
                FA Cup x1<br/>
                Carabao Cup x4</p> }
        imagen='rodri.jpg'
         />
        
        <Testimonio
        nombre= {<p>Lionel Andrés <strong>Messi</strong> Cuccitini</p>} 
        pais='Argentina'
        posicion='Attacker, Winger'
        equipo='Inter Miami'
        honores={<p>World Cup x1<br/>
        Champions League x4 <br/>
        La Liga x10<br/>
        Copa del Rey x7</p> }
        imagen='messi.jpg'
         />       

      </div>
    </div>
  );
}

export default App;
