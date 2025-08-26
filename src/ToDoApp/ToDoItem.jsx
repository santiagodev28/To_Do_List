const ToDoItem = ({ tarea, toggleCompletado }) => {
    

    return (
        <div className="flex item-center gap-3 justify-between border b-border-gray-300 p-3 shadow-sm rounded">
            <span className={tarea.completed ? 'line-through' : 'text-gray-400'}>{tarea.text}</span>
            <div className="flex flex-col">
            <input className="w-4 h-4 " type="checkbox" checked={tarea.completed} onChange={() => toggleCompletado(tarea.id)} />
            <button>Eliminar tarea</button>
            </div>
        </div>
    )
}

export default ToDoItem