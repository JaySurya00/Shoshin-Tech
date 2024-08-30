import style from '../css/statisticsCard.module.css';
import chart from '../../assets/chart.png';

export default function Statistics({title, data, men, women, growth}) {
    return (
        <div className={style.card}>
            <div className={`${style.cardContent} ${style.mainContent}`}>
                <div>
                    <p className={style.mainInfo}>{title}</p>
                    <p className={style.mainData}>{data}</p>
                </div>
                <div>
                    <p className={style.mainSubInfo}>{men} Men</p>
                    <p className={style.mainSubInfo}>{women} Women</p>
                </div>
            </div>
            <div className={`${style.cardContent} ${style.chartContent}`}>
                <p className={style.chartData}>{growth}%</p>
                <img src={chart} alt="Chart" />
                <p className={style.chartInfo}>{growth}% Past month</p>
            </div>
        </div>
    );
}
