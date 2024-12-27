import React, { useEffect } from "react";
import style from './Services.module.css';
import Comp from "./Comp.js";
import FormServices from "./FormServices.js";
import skis from '../img/skis.jpg'
import snowboard from '../img/snowboard.jpg';
import set from '../img/set.jpg';


function Services() {

    useEffect(() => {
    const timer = setTimeout(() => {
      const servicesElement = document.querySelector("#services");
      if (servicesElement) {
        servicesElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

    return (
        <section className={style.head}>
            <div className={style.title}>
                <span>Услуги нашего клуба</span>
            </div>
            <div id="services" className={style.services}>
                <Comp img={skis} alt="Лыжи" title="Аренда лыж"
                    text="Аренда лыж для всех уровней катания. Оптимально подобранные модели" cash="3 900 руб." />
                <Comp img={snowboard} alt="Сноуборд" title="Аренда сноубордов"
                    text="Аренда сноубордов для всех категорий катальщиков. Удобно и выгодно" cash="4 600 руб." />
                <Comp img={set} alt="Комплект" title="Аренда горнолыжного комплекта"
                    text="Полный комплект для горнолыжного катания в одном месте. Всё включено" cash="5 300 руб." />
            </div>
            <FormServices />
        </section>
    );
}

export default Services;