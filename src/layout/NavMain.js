import React from "react";
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import style from './NavMain.module.css';


function NavMain() {
    return (
        <header className={style.header}>
            <nav className={style.nav}>
                <div className={style.link}>
                    <div className={style.link_item}>
                        <Link to="/"><img src={logo} alt="logo" className={style.logo} /></Link>
                    </div>
                    <div className={style.link_text}>
                        <Link to="/">Главная</Link>
                        <Link to="/info">О нас</Link>
                        <Link to="/services">Услуги</Link>
                        <Link to="/contacts">Контакты</Link>
                        <Link to="/support">Поддержка</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavMain;