import React from 'react';
import './NavBar.scss'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <a className='NavBar__link'>Главная</a>
            <a className='NavBar__link'>Новости</a>
            <a className='NavBar__link'>О нас</a>
            <a className='NavBar__link'>Помощь и поддержка</a>
            <a className='NavBar__link'>Авторизация</a>
            <a className='NavBar__link'>Корзина</a>
        </nav>
    );
};

export default NavBar;