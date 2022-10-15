import React from 'react';
import './NavBar.scss';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/' className='NavBar__link'>Главная</Link>
            <Link to='/news' className='NavBar__link'>Новости</Link>
            <Link to='/about' className='NavBar__link'>О нас</Link>
            <Link to='/support' className='NavBar__link'>Помощь и поддержка</Link>
            <Link to='/auth' className='NavBar__link'>Авторизация</Link>
            <Link to='/cart' className='NavBar__link'>Корзина</Link>
        </nav>
    );
};

export default NavBar;