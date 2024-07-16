import Task from "./Task.jsx";

const  SelectedProject = ({project, onDelete,onDeleteTask,onAddTask,tasks}) =>  {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    return<div className='w-[35rem] mt-16'>
        <header className='pb-4 mb-4 border-b-2 border-stone-400'>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold text-stone-600 mb-2'>{project.title}</h1>
                <button onClick={onDelete} className='text-stone-500 hover:text-stone-900'>Delete</button>
            </div>
        </header>
        <p className='mb-4 text-stone-500'>{formattedDate}</p>
        <p className='mb-4 text-stone-500 whitespace-pre-wrap'>{project.description}</p>
        <Task onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks}/>
    </div>
}

export default SelectedProject