import React from 'react';

const TaskItem = ({ task, toggletask, deleteTask }) => {
  return 
   <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
    {task.description}
    <button onClick={() => toggletask(task.id)}>realizada</button>
    <button onClick={() => deleteTask(task.id)}>Eliminar</button>
   </li>
  
};