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
    };

    const completeTask = (id)=>{
        const currentTasks=tasks.map(task =>{
            if(task.id===id){
                task.isCompleted = !task.isCompleted;
            }
            return task;
        });
        setTasks(currentTasks)  
    };
    
    const deleteTask =(id)=>{
        const currentTasks = tasks.filter(task=>task.id!==id);
        setTasks(currentTasks);
    };

    return(
        <>
            <Form onSubmit={addTask}/>
            <div className='taskList-container'>
                {
                  tasks.map(
                    (task)=>
                    <Task
                        key={task.id}
                        id={task.id}
                        text={task.text}  
                        isCompleted={task.isCompleted}
                        completeTask={completeTask}
                        deleteTask={deleteTask}  />
                  )  
                }

            </div>
        </>
    );
};

export default TaskList;