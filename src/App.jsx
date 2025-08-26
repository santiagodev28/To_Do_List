import ToDoItem from '../src/ToDoApp/ToDoItem.jsx'
import { useState } from 'react'

function App() {

  const [tareas, setTareas] = useState([])
  const [input, setInput] = useState("")

  const agregarTarea = () => {
    if (input.trim()) {
      setTareas([...tareas, { id: Date.now(), text: input.trim(), completed: false }]);
      setInput("")
    }
  }

  const toggleCompletado = (id) => {
    setTareas(
      tareas.map((tarea) => tarea.id === id ? { ...tarea, completed: !tarea.completed } : tarea)
    )
  }

  return (
    <>
      <div className='max-w-md mx-auto mt-10 p-2 rounded shadow'>
        <h1 className='text-3xl font-bold mb-5 text-center'>LISTA DE TAREAS</h1>
        <div className='flex gap-3 mb-5'>
          <input className='flex-1 p-2 border rounded' type="text" name="" id=""  value={input} placeholder='Añadir tarea' onChange={(e) => { setInput(e.target.value)}} />
          <button className='bg-blue-500 text-white px-4 py-2 rounded'  onClick={agregarTarea} >Agregar Tarea</button>
        </div>
        <div className='space-y-2'>
          {tareas.map((tarea) =>  (<ToDoItem key={tarea.id} tarea={tarea} toggleCompletado={toggleCompletado} />)) }
        </div>
        <div></div>

      </div>
    </>
  )
}

export default App
