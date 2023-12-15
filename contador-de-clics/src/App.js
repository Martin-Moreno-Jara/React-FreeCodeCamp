import './App.css';
import jjkLogo from './images/jjk-logo.png';

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
    </div>
  );
}

export default App;
