import React from "react";
import style from './Clock.module.scss'

interface Props {
    time : number | undefined
}

export default function Clock({time = 0} : Props){
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minutesD, minutesU] = String(minutes).padStart(2, '0');
    const [secondsD, secondsU] = String(seconds).padStart(2, '0');

    return(
        <React.Fragment>
            <span className={style.relogioNumero}>{minutesD}</span>
            <span className={style.relogioNumero}>{minutesU}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondsD}</span>
            <span className={style.relogioNumero}>{secondsU}</span>
        </React.Fragment>
    )
}