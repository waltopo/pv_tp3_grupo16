import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaTareas from './components/ListaTareas'
import './ejercicio-adicional/ejercicioAdicional.js';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ListaTareas/>
    </>
  )
}

export default App
