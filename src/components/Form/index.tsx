import React, { useState } from "react";
import { ITask } from "../../types/Itask";
import Button from "../Button";
import style from './Form.module.scss';
import {v4 as uuidv4} from 'uuid';

interface Props{
    setTasks : React.Dispatch<React.SetStateAction<ITask[]>>
}

export default function Form({setTasks} : Props){
    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00");
    
    function addNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTasks(x => [...x, {task, time, selected : false, completed: false, id: uuidv4()}]);
        setTask("");
        setTime("00:00");
    }
    return(
        <form className={style.novaTarefa} onSubmit={addNewTask}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Add new study.
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        value={task}
                        onChange={event => setTask(event.target.value)}
                        placeholder="What do you want to study?"
                        required
                    />
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Timer
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="time"
                        value={time}
                        onChange={event => setTime(event.target.value)}
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button
                    text="Adicionar"
                    type="submit"
                />
            </form> 
    )
}