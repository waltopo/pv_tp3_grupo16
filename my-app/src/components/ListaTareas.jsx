import React, { useState } from 'react';
import InputTarea from './InputTarea';

const ListaTareas = () => {
    const [tareas, setTareas] = useState([]);

    const agregar = (nuevaTarea) => {
        console.log(nuevaTarea);
        if (
            nuevaTarea &&
            !tareas.some((tarea) => tarea.texto.toLowerCase() === nuevaTarea.toLowerCase())
        ) {
            setTareas([...tareas, { texto: nuevaTarea, completed: false }]);
        }
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = tareas.filter((_, i) => i !== index);
        setTareas(nuevasTareas);
    };

    const toggleCompletar = (index) => {
        const nuevasTareas = tareas.map((tarea, i) =>
            i === index ? { ...tarea, completed: !tarea.completed } : tarea
        );
        setTareas(nuevasTareas);
    };

    return (
        <div className="contenido">
            <h1>Lista de Tareas</h1>
            <InputTarea agregar={agregar} />
            <ul>
                {tareas.map((tarea, i) => (
                    <li key={i}>
                        <span style={{ textDecoration: tarea.completed ? 'line-through' : 'none' }}>
                            {tarea.texto}
                        </span>
                        <button onClick={() => toggleCompletar(i)}>Realizada</button>
                        <button onClick={() => eliminarTarea(i)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaTareas;