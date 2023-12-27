import React from 'react';
import '../stylesheets/Form.css'

function Form(props){
    return(
        <div className='task-form'>
            <input 
            className='task-input'
            type='text'
            placeholder='Escribe una tarea'
            name='text'
            />

            <button className='task-button'>
            Agregar Tarea
            </button>
            
        </div>
    );
};

export default Form