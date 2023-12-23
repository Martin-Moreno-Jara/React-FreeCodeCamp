import './App.css';
import logo from './images/logo.png'
import Button from './components/Button'
import Screen from './components/Screen'
import ClearButton from './components/ClearButton'
import {useState} from 'react';

function App() {
  const [input,setInput] = useState('');
  const writeNumber= (number)=>{setInput(input + number)};
  const clearAll= ()=>{setInput('')};

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
        <Screen input={input}/>
          <div className='row'>
            <Button write={writeNumber}>1</Button>
            <Button write={writeNumber}>2</Button>
            <Button write={writeNumber}>3</Button>
            <Button write={writeNumber}>+</Button>
          </div>
          <div  className='row'>
            <Button write={writeNumber}>4</Button>
            <Button write={writeNumber} >5</Button>
            <Button write={writeNumber}>6</Button>
            <Button write={writeNumber}>-</Button>
          </div>
          <div  className='row'>
            <Button write={writeNumber}>7</Button>
            <Button write={writeNumber}>8</Button>
            <Button write={writeNumber}>9</Button>
            <Button write={writeNumber}>*</Button>
            
          </div>
          <div  className='row'>
            <Button write={writeNumber}>=</Button>
            <Button write={writeNumber}>0</Button>
            <Button write={writeNumber}>.</Button>
            <Button write={writeNumber}>/</Button>
          </div>
          <div  className='row'>
          <ClearButton clear={clearAll}>Clear</ClearButton>
          </div>

        </div>
    </div>
  );
}

export default App;
