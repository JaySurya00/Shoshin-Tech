import style from '../css/informationCard.module.css';

function getRandomLightColor() {
  const r = Math.floor(Math.random() * 128 + 127); // Random value between 127 and 255
  const g = Math.floor(Math.random() * 128 + 127);
  const b = Math.floor(Math.random() * 128 + 127);
  return `rgb(${r}, ${g}, ${b})`;
}
function getRandomDarkColor() {
    const r = Math.floor(Math.random() * 128); // Random value between 0 and 127
    const g = Math.floor(Math.random() * 128);
    const b = Math.floor(Math.random() * 128);
    return `rgb(${r}, ${g}, ${b})`;
}

  

export default function Information({title, data, message}) {
    const backgroundColor = getRandomLightColor();
    const textColor = getRandomDarkColor();
    return (
        <div className={style.card} style={{backgroundColor: backgroundColor}}>
            <div className={style.cardContent}>
                <p className={style.info}>{title}</p>
                <p className={style.data}>{data}</p>
                <p className={style.subInfo} style={{color: textColor}}>{message}</p>
            </div>

        </div>
    )
}

