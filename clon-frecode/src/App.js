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
        honores='1x Champions League, 5x Premier League, 2x FA Cup, 4x Carabao Cup'
        imagen='kdb.webp'
         />
        
        <Testimonio
        nombre='Rodrigo Hernandez Cascante (Rodri) '
        pais='Spain'
        posicion='Central Midfielder'
        equipo='Manchester City'
        honores='1x Champions League, 4x Premier League, 1x FA Cup, 3x Carabao Cup'
        imagen='rodri.jpg'
         />
        
        <Testimonio
        nombre='Lionel Andres Messi Cuccitini'
        pais='Argentina'
        posicion='Attacker, Winger'
        equipo='Inter Miami'
        honores='1x World Cup, 4x Champions League, 12x La Liga'
        imagen='messi.jpg'
         />
        

      </div>
    </div>
  );
}

export default App;
