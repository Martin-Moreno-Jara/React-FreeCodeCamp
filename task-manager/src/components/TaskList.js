import React,{ useState } from 'react';
import '../stylesheets/TaskList.css'
import Form from './Form';
import Task from './Task';

function TaskList(){
    const [tasks,setTasks] = useState([]);

    const addTask = (task)=>{
        if(task.text.trim()){
            task.text = task.text.trim();
            const currentTasks = [task, ...tasks]
            setTasks(currentTasks)
        }
        console.log(tasks)
    };

    const completeTask = (id)=>{

    };
    
    const deleteTask =(id)=>{

    };

    return(
        <>
            <Form onSubmit={addTask}/>
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