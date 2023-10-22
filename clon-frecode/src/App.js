import logo from './logo.svg';
import './App.css';
import {Testimonio} from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Conoce a los GOATS</h1>
        <Testimonio />
      </div>
    </div>
  );
}

export default App;
