import React,{useState} from 'react';
import '../stylesheets/Form.css'

function Form(props){
    const [input,setInput] = useState('');

    const manageChange = (e)=>
    {
     setInput(e.target.value);   
    }

    const manageSignal = (e)=>
    {
        const newTask = 
        {
            id:'3548',
            text:{input}
        }

    };

    return(
        <div className='task-form'>
            <input 
            className='task-input'
            type='text'
            placeholder='Escribe una tarea'
            name='text'
            onChange={manageChange}
            />

            <button 
            className='task-button'
            onClick={manageSignal}
            >
            Agregar Tarea
            </button>
            
        </div>
    );
};

export default Form