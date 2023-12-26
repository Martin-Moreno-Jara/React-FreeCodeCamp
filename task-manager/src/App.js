import './App.css';
import Logo from './components/Logo'

function App() {
  return (
    <div className="task-manager">
      <Logo/>  {/*Componente del logo*/}
      <div className='main-task-list'>
        <h1>Mis tareas</h1>
      </div>
    </div>
  );
}

export default App;
