import React,{ useState} from 'react';
import '../stylesheets/Form.css';
import { v4 as uuidv4 } from 'uuid';

function Form(props){
    const [input,setInput] = useState('');

    const manageChange = (e)=>
    {
     setInput(e.target.value);   
    }

    const manageSignal = (e)=>
    {
        e.preventDefault();
        const newTask = 
        {
            id: uuidv4(),
            text:input,
            completed:false
        }
        props.onSubmit(newTask);

    };

    return(
        <form 
            className='task-form'
            onSubmit={manageSignal}>
            <input 
            className='task-input'
            type='text'
            placeholder='Escribe una tarea'
            name='text'
            onChange={manageChange}
            />

            <button 
            className='task-button'
            >
            Agregar Tarea
            </button>
            
        </form>
    );
};

export default Form