import { useState } from "react";
import { timeForSeconds } from "../../common/utils/time";
import { ITask } from "../../types/Itask";
import Button from "../Button";
import Clock from "./Clock";
import style from './Timer.module.scss';

interface Props{
    selected : ITask | undefined
}

export default function Timer({selected} : Props){
    const [time, setTime] =  useState<number>();
    if(selected?.time)
        setTime(timeForSeconds(selected.time));
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Choose a card and start the timer</p>
            Time : {time}
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button
                text="Start"
            />
        </div>
    )
}