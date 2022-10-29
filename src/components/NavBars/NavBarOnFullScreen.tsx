import React from 'react';
import './NavBarOnFullScreent.scss'
import {Link} from "react-router-dom";

interface NavBarOnFullScreenProps {
    changeStateFullNav: Function
}

const NavBarOnFullScreen = (props: NavBarOnFullScreenProps) => {

    function hideFullNav() {
        let main = document.querySelector('main') as HTMLElement
        main.style.display = 'block'
        props.changeStateFullNav()
    }

    return (
        <div onClick={hideFullNav} className='NavBarOnFullscreen'>
            <Link to='/' className='NavBarOnFullscreen__link'>Главная</Link>
            <Link to='/news' className='NavBarOnFullscreen__link'>Новости</Link>
            <Link to='/about' className='NavBarOnFullscreen__link'>О нас</Link>
            <Link to='/support' className='NavBarOnFullscreen__link'>Помощь и поддержка</Link>
            <Link to='/authorization' className='NavBarOnFullscreen__link'>Авторизация</Link>
            <Link to='/cart' className='NavBarOnFullscreen__link'>Корзина</Link>
        </div>
    );
};

export default NavBarOnFullScreen;