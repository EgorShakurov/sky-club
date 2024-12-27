import React from "react";
import style from './Comp.module.css';

function Comp(props) {
    return (
        <div className={style.card}>
            <div className={style.img}>
                <img src={props.img} alt={props.alt} />
            </div>
            <div className={style.info}>
                <strong className={style.title}>{props.title}</strong>
                <span className={style.text}>{props.text}</span>
                <strong className={style.cash}>{props.cash}</strong>
                <div>
                    <button className={style.btn}>Оставить заявку</button>
                </div>
            </div>
        </div>
    );
}

export default Comp;