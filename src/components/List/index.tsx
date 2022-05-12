import React from "react";
import Item from "./Item";
import style from './List.module.scss';

function List(){
    const tasks = [{
        task: 'Unity',
        time: '02:00:00'
    },

    {
        task: 'GMS 2',
        time: '01:30:00'
    }]

    return(
    <aside className={style.listaTarefas}>
        <h2> Studies of day</h2>
        <ul>
            {tasks.map((item, index) =>(
                <Item 
                    key={index}//Forma de linkar o li com o dom
                    task={item.task}
                    time={item.time}
                />
            ))}
        </ul>
    </aside>
    )
}

export default List;