import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
import style from './Nav.module.css';
import phone from '../svg/phone_.svg';

function Nav() {
    return (
        <section className={style.header}>
            <nav>
                <div className={style.link}>
                    <div className={style.logo_block}>
                        <div className={style.logo_link}>
                            <Link to="/"><img className={style.logo_img} src={logo} alt="logo" /></Link>
                        </div>
                        <span className={style.text}>Copyright © Бизнес Инфо. 2000-2024. Все права защищены</span>
                    </div>
                    <div className={style.link_text}>
                        <div className={style.link_info}>
                            <span className={style.text_info}>Информация</span>
                            <Link to="/info">О нас</Link>
                            <Link to="/contacts">Контакты</Link>
                        </div>
                        <div className={style.link_info}>
                            <span className={style.text_info}>Для клиента</span>
                            <Link to="/services">Услуги</Link>
                        </div>
                        <div className={style.link_info}>
                            <span className={style.text_info}>Обратная связь</span>
                            <Link to="/support">Поддержка</Link>
                            <span className={style.number}><img className={style.phone} src={phone} alt="phone"/>8 800 333 22 33</span>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Nav;