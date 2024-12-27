import React, { useEffect } from "react";
import style from './Info.module.css';
import resort from '../img/resort.jpg';


function Info() {

    useEffect(() => {
        const timer = setTimeout(() => {
            const infoElement = document.querySelector("#info");
            if (infoElement) {
                infoElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className={style.info}>
            <div className={style.title}>
                <span>О нашем клубе</span>
            </div>
            <div className={style.container}>
                    <div className={style.resort}>
                        <img src={resort} alt="Горнолыжный курорт" />
                    </div>
                    <div id="info" class={style.text}>
                        <p>
                            Горнолыжный клуб "Снежный Шар" - это уютное место для любителей зимнего спорта и активного отдыха. Наш клуб предлагает индивидуальный и групповой прокат горнолыжного и сноубордического снаряжения, а также профессиональные курсы для начинающих и опытных лыжников.
                        </p>
                        <p>
                            <span>Наша задача - создать уникальное заряженное зимнее настроение, где каждый сможет найти что-то для себя:</span><br />
                            <span><strong>- Программы обучения:</strong> Курсы для детей и взрослых, работа с опытными инструкторами.</span><br />
                            <span><strong>- Экскурсии:</strong> Организация захватывающих однодневных поездок на лучшие горнолыжные курорты.</span><br />
                            <span><strong>- Развлечения:</strong> Тематические мероприятия, вечеринки на свежем воздухе, конкурсы и мастер-классы по лыжному спорту.</span><br />
                            <span><strong>- Отель и ресторан:</strong> Уютное размещение и аппетитная еда с блюдами местной кухни для восстановления сил после активного дня на склонах.</span>
                        </p>
                </div>
            </div>
        </section >
    );
}

export default Info;