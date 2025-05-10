import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaTareas from './components/ListaTareas'
import './ejercicio-adicional/ejercicioAdicional.js';
function App() {
  const [count, setCount] = useState(0)
  const [nextId, setNextId] = useState(1);

  return (
    <>
     <ListaTareas/>
     
    </>
  ) 
  const toggletask = (id) => {
    const updated = tasks-map(task => 
    task.id === id ? { ...task, completed: !task.completed } : task);
    setTasks(updated);
  }
  const deletetask = (id) => {
    const filtered = tasks.filter(task => task.id !== id); 
  }
}
export default App;
