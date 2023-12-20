import './App.css';
import logo from './images/logo.png'
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <img
        src={logo}
        className='logo'
        alt='Logo de la aplicación'
        />
      </div>
      <div className='main-container'>
          <div className='row'>
            <Button>1</Button>
            <Button>2</Button>
            <Button>+</Button>
          </div>
          <div  className='row'>
            
          </div>
          <div  className='row'>
            
          </div>
          <div  className='row'>
            
          </div>
          <div  className='row'>
            
          </div>

        </div>
    </div>
  );
}

export default App;
