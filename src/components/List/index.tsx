import { ITask } from "../../types/Itask";
import Item from "./Item";
import style from './List.module.scss';


interface Props{
    tasks : ITask[],
    selectedTask : (taskSelected: ITask) => void
}

function List({tasks, selectedTask}: Props){
    return(
    <aside className={style.listaTarefas}>
        <h2> Studies of day</h2>
        <ul>
            {tasks.map(item =>(
                <Item 
                    selectedTask = {selectedTask}
                    key={item.id} //Forma de linkar o li com o dom
                    task={item.task}
                    time={item.time} 
                    selected={item.selected}
                    completed={item.completed} 
                     id={item.id} />
            ))}
        </ul>
    </aside>
    )
}

export default List;