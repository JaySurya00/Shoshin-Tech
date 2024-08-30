import style from '../css/announcementCard.module.css'
import Todo from "./todoCard";


export default function Announcement({announcements=[]}) {
    return (
        <div className={style.card}>
            <div className={style.cardContent}>
                <div className={style.info}>
                    <p>Announcement</p>
                    <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
                </div>
                <div>
                    {announcements.map((announcement)=>{
                        return(
                            <Todo todo={announcement.message} time={announcement.time} />
                        )
                    })}
                </div>
            </div>
            <button  className={style.actionButton}><p>See All Announcements</p></button>
        </div>
    )
}