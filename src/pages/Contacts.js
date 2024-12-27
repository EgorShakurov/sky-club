import React, { useEffect } from "react";
import style from './Contacts.module.css';

function Contacts() {

    useEffect(() => {
        const timer = setTimeout(() => {
          const contactsElement = document.querySelector("#contacts");
          if (contactsElement) {
            contactsElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 300);
    
        return () => clearTimeout(timer);
      }, []);

    return (
        <section id="contacts" className={style.head}>
            <div className={style.contacts}>
                <div className={style.info_text}> 
                    <div className={style.title}>
                        <strong>Контакты</strong>
                        <span>Мы с радостью ответим на все ваши вопросы</span>
                    </div>
                    <div className={style.info}>
                        <span>123456, г. Москва, Горнолыжный комплекс 13</span>
                        <span><strong>Телефон:</strong>8 800 333 22 33</span>
                        <span><strong>Почта:</strong> commerce@company.com</span>
                        <span className={style.time}><strong>Время работы:</strong> 7:00-21:00 без выходных</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;