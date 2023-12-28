import React,{ useState } from 'react';
import '../stylesheets/TaskList.css'
import Form from './Form';
import Task from './Task';

function TaskList(){
    const [tasks,setTasks] = useState([]);

    const addTask = (task)=>{
        console.log('Task succesfully added');
        console.log(task)
    };

    const completeTask = (id)=>{

    };
    
    const deleteTask =(id)=>{

    };

    return(
        <>
            <Form/>
            <div className='taskList-container'>
                {
                  tasks.map(
                    (task)=>
                    {<Task
                        text={tasks.text}  
                        isCompleted={tasks.isCompleted}  />}
                  )  
                }

            </div>
        </>
    );
};

export default TaskList;