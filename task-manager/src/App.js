import './App.css';
import Logo from './components/Logo';
import Task from './components/Task';
import Form from './components/Form';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="task-manager">
      <Logo/>  {/*Componente del logo*/}
      <div className='main-task-list'>
        <h1>Mis tareas</h1>
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
