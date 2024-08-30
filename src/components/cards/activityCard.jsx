import style from '../css/activityCard.module.css';

export default function Activity() {
    return (
        <div className={style.card}>
            <div className={style.info}>
                <p>Recent Activity</p>
            </div>
            <div className={style.subInfo}>
                <p className={style.p1}>10.40 AM, Fri 10 Sept 2021</p>
                <p className={style.p2}>You Posted a New Job</p>
                <p className={style.p3}>Kindly check the requirements and terms of work and make sure everything is right.</p>
                <div>
                    <p className={style.p4}>Today you makes 12 Activity</p>
                    <button className={style.actionButton}>
                        <p>See All Activity</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
