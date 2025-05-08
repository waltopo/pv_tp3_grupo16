import React,{useState}from 'react'
import InputTarea from './InputTarea';

const ListaTareas = () => {

    const agregar = (nuevaTarea) =>{
        console.log(nuevaTarea);
        if(nuevaTarea && !tareas.some(tarea => tarea.toLowerCase() === nuevaTarea.toLowerCase())){
            setTareas([...tareas,nuevaTarea]);
        }
    }
    
    const [tareas, setTareas] = useState([]);

    return (
        <div className='contenido'>
            <h1>Lista de Tareas</h1>
            <InputTarea agregar={agregar}/>
            <ul>
                {tareas.map((ele, i)=>(
                    <li key={i}>{ele}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListaTareas