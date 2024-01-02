import './App.css';
import jjkLogo from './images/jjk-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import React from 'react';
import {useState} from 'react';

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = ()=>{setNumClics(numClics+1);}    
  const reiniciarContador = ()=>{setNumClics(0);}
  return (
    <div className="App">
     <div className="jjk-logo-contenedor">
      <img 
        className="jjk-logo"
        src={jjkLogo}
        alt="Jujutsu Kaisen Logo"
        />
      </div> 
      <div className='main-container'>
        <h2>
          Contador de eventos traumaticos de Itadori 
        </h2>
        <Contador
        numClics={numClics}
        />

        <div className='contenedor-botones'>

        <Boton
      texto='Aumentar trauma'
      isClicButton={true}
      manejarClic={manejarClic}
      />

        <Boton
      texto='Reiniciar'
      isClicButton={false}
      manejarClic={reiniciarContador}
      />
        </div>
      

      </div>
    </div>
  );
}

export default App;
