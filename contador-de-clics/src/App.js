import './App.css';
import jjkLogo from './images/jjk-logo.png';
import Boton from './componentes/Boton';

function App() {
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
        <div className='contenedor-botones'>
        <Boton
      texto='Aumentar trauma'
      isClicButton={true}
      manejarClic={()=>{console.log('Como estan tonotos')}}
      />

        <Boton
      texto='Reiniciar'
      isClicButton={false}
      manejarClic={()=>{console.log('Adios tonotos')}}
      />
        </div>
      

      </div>
    </div>
  );
}

export default App;
