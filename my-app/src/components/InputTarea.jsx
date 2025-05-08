import React,{useState} from 'react'

const InputNombre = ()=>{

    const[tarea, setTarea] = useState("");

    const manejarTarea = () => {
        agregar(tarea);
        setTarea('');
    }

    return (
        <div>
            <input type="text" placeholder=" Nueva Tarea..."value={tarea} onChange={(e)=>setTarea(e.target.value)}/>
            <button onClick={manejarTarea}>Agregar</button>
        </div>
    )
}

export default InputNombre