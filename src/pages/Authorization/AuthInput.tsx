import React from 'react';
import './AuthInput.scss'

const AuthInput = () => {
    return (
        <div>
            <div className='auth'>
                <input type='text' placeholder='Введите логин' className='auth__input'/>
            </div>
            <div className='auth'>
                <input type='text' placeholder='Введите пароль' className='auth__input'/>
            </div>
        </div>

    );
};

export default AuthInput;