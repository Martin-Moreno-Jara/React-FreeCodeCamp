import React from 'react';
import '../stylesheets/TaskList.css'
import Form from './Form';

function TaskList(){
    return(
        <>
            <Form/>
            <div className='taskList-container'>
                Lista de tareas

            </div>
        </>
    );
};

export default TaskList;