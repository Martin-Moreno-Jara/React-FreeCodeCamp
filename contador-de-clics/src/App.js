import './App.css';
import jjkLogo from './images/jjk-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import React from 'react';

class App extends React.Component{

  constructor(){
    super();
    this.state={numClics:0};
    this.manejarClic = this.manejarClic.bind(this);
  this.reiniciarContador = this.reiniciarContador.bind(this);
  };
  

  manejarClic(){
    this.setState(({numClics})=>({numClics:numClics+1}));
  }

  reiniciarContador(){
    this.setState({numClics:0});    
  }

  render(){
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
          numClics={this.state.numClics}
          />
          <div className='contenedor-botones'>
  
          <Boton
        texto='Aumentar trauma'
        isClicButton={true}
        manejarClic={this.manejarClic}
        />
  
          <Boton
        texto='Reiniciar'
        isClicButton={false}
        manejarClic={this.reiniciarContador}
        />
          </div>
        
  
        </div>
      </div>
    );
  };
}

export default App;
