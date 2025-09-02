const ToDoItem = ({ tarea, toggleCompletado, eliminarTarea, editando, iniciarEdicion, nuevoTexto, setNuevoTexto, guardarEdicion }) => {
    

    return (
        <div className="flex item-center gap-3 justify-between border b-border-gray-300 p-3 shadow-sm rounded">
            {editando ? (
                <>
                    <input
                        className="flex-1 p-1 border rounded"
                        type="text"
                        value={nuevoTexto}
                        onChange={e => setNuevoTexto(e.target.value)}
                    />
                    <button className="rounded-md px-4 py-1 bg-green-500 text-white" onClick={guardarEdicion}>Guardar</button>
                </>
            ) : (
                <>
                    <span className={tarea.completed ? 'line-through' : 'text-gray-400'}>{tarea.text}</span>
                    <div className="flex flex-col gap-2 ">
                        <input className="w-4 h-4 " type="checkbox" checked={tarea.completed} onChange={() => toggleCompletado(tarea.id)} />
                        <button className="rounded-md px-4 py-1 bg-red-500 text-white" onClick={() => eliminarTarea(tarea.id)}>Eliminar tarea</button>
                        <button className="rounded-md px-4 py-1 bg-blue-300 text-white" onClick={iniciarEdicion}>Editar tarea</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default ToDoItem