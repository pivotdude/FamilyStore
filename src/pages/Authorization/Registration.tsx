import React from 'react';
import './Registration.scss'
import {Link} from "react-router-dom";
import useInput from "../../hooks/useInput";
import AuthInput from "./AuthInput";

const Registration = () => {
    const email = useInput()
    const login = useInput()
    const password = useInput()

    const submitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Форма send')
    }

    return (
        <div className='authorization'>
            <div className='container authorization__container'>
                <form className="authorization-win">
                    <p className='authorization-win__title'>Регистрация</p>
                    <div>
                        <AuthInput placeholder='Введите email' {...email} />
                        <AuthInput placeholder='Введите логин' {...login}/>
                        <AuthInput placeholder='Введите пароль' {...password}/>
                    </div>

                    <div className='authorization-action'>
                        <Link to='/authorization' className='authorization-action__link'>Авторизация</Link>
                        <Link to='/forgot-password' className='authorization-action__link'>Забыли пароль</Link>
                    </div>

                    <a onClick={submitHandler} className='button authorization-win__button'>Auth</a>
                </form>
            </div>
        </div>
    );
};

export default Registration;