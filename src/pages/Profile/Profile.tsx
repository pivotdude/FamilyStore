import React, {useEffect, useState} from 'react';
import img from './Ellipse 4.png'
import './Profile.scss'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {StateModel} from "../../Models";
import {LogoutAction} from "../../redux/actions";

const Profile = () => {
    const navigate = useNavigate()
    const [login, setLogin] = useState(true)
    const dispatch: Function  = useDispatch()

    useEffect(() => {
        let login = localStorage.getItem("login")
        if (!login) {
            navigate('/authorization')
        }
    }, [login])

    const exitHandler = e => {
        localStorage.removeItem('login')
        dispatch(LogoutAction())
        setLogin(false)
    }

    return (
        <div className='profile'>
            <img className='profile__image' src={img} />
            <p className='profile__name'>Johnsek</p>
            <p className='profile__link'>Заказы</p>
            <p className='profile__link'>Корзина</p>
            <p className='profile__link'>Избранное</p>
            <p className='profile__link'>Настройки профиля</p>
            <p onClick={exitHandler} className='profile__link'>Выйти</p>
        </div>
    );
};

export default Profile;