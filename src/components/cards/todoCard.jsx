import pin from '../../assets/pin.svg';
import more from '../../assets/more.svg'

import style from '../css/todoCard.module.css'

export default function Todo({todo, time}) {
    return (
        <div className={style.card}>
            <p className={style.message}>{todo}</p>
            <div className={style.actionBar}>
                <p>{time}</p>
                <div>
                    <img src={pin} />
                    <img src={more} />
                </div>
            </div>
        </div>
    )
}