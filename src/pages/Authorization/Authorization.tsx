import React from 'react';
import './Authorization.scss'
import AuthInput from "./AuthInput";


const Authorization = () => {
    return (
        <div className='authorization'>
            <div className='container authorization__container'>
                <div className="authorization-win">
                    <p className='authorization-win__title'>Авторизация</p>
                    <AuthInput />
                    <a className='button authorization-win__button'>asd</a>
                </div>

            </div>
        </div>
    );
};

export default Authorization;