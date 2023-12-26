import './App.css';
import Logo from './components/Logo';
import Task from './components/Task';

function App() {
  return (
    <div className="task-manager">
      <Logo/>  {/*Componente del logo*/}
      <div className='main-task-list'>
        <h1>Mis tareas</h1>
        <Task text='la mama de la mama'/>
      </div>
    </div>
  );
}

export default App;
