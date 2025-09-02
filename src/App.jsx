import ToDoItem from '../src/ToDoApp/ToDoItem.jsx'
import { use, useState } from 'react'

function App() {

  const [tareas, setTareas] = useState([])
  const [input, setInput] = useState("")
  const [editandoId, setEditandoId] = useState(null)
  const [nuevoTexto, setNuevoTexto] = useState("")

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

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea)=> tarea.id !== id))

  }

  const iniciarEdicion = (id, texto) => {
    setEditandoId(id);
    setNuevoTexto(texto);
  }

  const guardarEdicion = (id) => {
    setTareas(tareas.map((tarea) => tarea.id === id ? { ...tarea, text: nuevoTexto } : tarea));
    setEditandoId(null);
    setNuevoTexto("");
  }




  return (
    <>
      <div className='max-w-md mx-auto mt-10 p-2 rounded shadow'>
        <h1 className='text-3xl font-bold mb-5 text-center'>LISTA DE TAREAS</h1>
        <div className='flex gap-3 mb-5'>
          <input className='flex-1 p-2 border rounded' type="text" name="" id="" value={input} placeholder='Añadir tarea' onChange={(e) => { setInput(e.target.value) }} />
          <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={agregarTarea} >Agregar Tarea</button>
        </div>
        <div className='space-y-2'>
          {tareas.map((tarea) => (
            <ToDoItem
              key={tarea.id}
              tarea={tarea}
              toggleCompletado={toggleCompletado}
              eliminarTarea={eliminarTarea}
              editando={editandoId === tarea.id}
              iniciarEdicion={() => iniciarEdicion(tarea.id, tarea.text)}
              nuevoTexto={nuevoTexto}
              setNuevoTexto={setNuevoTexto}
              guardarEdicion={() => guardarEdicion(tarea.id)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
