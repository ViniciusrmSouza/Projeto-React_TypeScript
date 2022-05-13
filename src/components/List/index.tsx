import { ITask } from "../../types/Itask";
import Item from "./Item";
import style from './List.module.scss';

function List({tasks}: {tasks : ITask[]}){
    return(
    <aside className={style.listaTarefas}>
        <h2> Studies of day</h2>
        <ul>
            {tasks.map((item, index) =>(
                <Item 
                    key={index} //Forma de linkar o li com o dom
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