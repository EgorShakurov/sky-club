import React, { useEffect } from "react";
import style from './Main.module.css';
import landmark from '../svg/landmark.svg';
import hotel from '../svg/hotel.svg';
import cup from '../svg/cup.svg';


function Main() {

    useEffect(() => {

        const timer = setTimeout(() => {
          const mainElement = document.querySelector("#main");
          if (mainElement) {
            mainElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 300); 
    
        return () => clearTimeout(timer);
      }, []);

    return (
        <section id="main"  className={style.mainImg}>
            <div className={style.section}>
                <div className={style.title}>
                    <span>На высоте: Погружение в мир горнолыжного клуба</span>
                </div>
                <div className={style.features}>
                    <div className={style.info}>
                        <div className={style.container}>
                            <img className={style.svg} src={landmark} alt="Горнолыжные комплекты" />
                            <span>Горнолыжные комплекты</span>
                        </div>
                        <span className={style.text}>Полный комплект для горнолыжного катания в одном месте</span>
                    </div>
                    <div className={style.info}>
                        <div className={style.container}>
                            <img className={style.svg} src={hotel} alt="Гостиницы и хостелы" />
                            <span>Гостиницы и хостелы</span>
                        </div>
                        <span className={style.text}>Уютное размещение в шаговой доступности от склона</span>
                    </div>
                    <div className={style.info}>
                        <div className={style.container}>
                            <img className={style.svg} src={cup} alt="Рестораны" />
                            <span>Рестораны на территории клуба</span>
                        </div>
                        <span className={style.text}>Вкусные блюда и уютная атмосфера рядом со склоном</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Main;