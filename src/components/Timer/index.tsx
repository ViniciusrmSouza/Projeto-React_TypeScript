import { useEffect, useState } from "react";
import { timeForSeconds } from "../../common/utils/time";
import { ITask } from "../../types/Itask";
import Button from "../Button";
import Clock from "./Clock";
import style from './Timer.module.scss';

interface Props{
    selected : ITask | undefined,
    finishTask : () => void

}

export default function Timer({selected, finishTask} : Props){
    const [time, setTime] =  useState<number>();

    useEffect(() => {
        if(selected?.time)
            setTime(timeForSeconds(selected.time));
    },[selected]);

    function regressive(count : number = 0){
        setTimeout(() => {
            if(count > 0){
                setTime(count - 1);
                return regressive(count - 1);
            }
            finishTask();
        }, 1000);
    }
 
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Choose a card and start the timer</p>
            Time : {time}
            <div className={style.relogioWrapper}>
                <Clock time={time} />
            </div>
            
            <Button onClick={() => regressive(time)}
                text="Start"
            />
        </div>
    )
}