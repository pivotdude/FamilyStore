import React, {useEffect, useState} from 'react';
import './Authorization.scss'
import AuthInput from "./AuthInput";
import {Link} from "react-router-dom";
import useInput from "../../hooks/useInput";
import {useDispatch, useSelector} from "react-redux";
import {StateModel} from "../../Models";
import {authAction} from "../../redux/actions";
import {useNavigate} from "react-router-dom";
import Notification from "../../components/Notification/Notification";

const Authorization = () => {
    const navigate = useNavigate()
    const email = useInput('email', 'email')
    const password = useInput('password', 'password')

    const dispatch: Function  = useDispatch()
    const auth: object = useSelector((state: StateModel) => state.authorization.auth)
    const loading: boolean = useSelector((state: StateModel) => state.app.loading)
    const [errors, setErrors] = useState()
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        if (auth.success == false) {
            setErrors(auth.message)
        }}, [auth])

    useEffect(() => {
        if (auth.success == true) {
            console.log(auth)
            localStorage.setItem("login", JSON.stringify([auth.token, auth.UserId]))
            setSuccess(true)
            navigate('/profile')
        }}, [auth])


    const submitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = {
            email: email.value,
            password: password.value
        }
        dispatch(authAction(data))
    }

    return (
        <div className='authorization'>

            <div className='container authorization__container'>
                <form className="authorization-win">
                    <p className='authorization-win__title'>Авторизация</p>
                    <div>
                        <AuthInput placeholder='Введите email' {...email} />
                        <AuthInput placeholder='Введите пароль' {...password}/>
                    </div>

                    <div className='authorization-action'>
                        <Link to='/registration' className='authorization-action__link'>Регистрация</Link>
                        <Link to='/forgot-password' className='authorization-action__link'>Забыли пароль</Link>
                    </div>

                    <a onClick={submitHandler} className='button authorization-win__button'>Auth</a>
                </form>
                {errors && <Notification  type='warning' description={errors} title='Ошибка' />}
                {success && <Notification key={Date.now()} type='check' title='Вы вошли' description='Вы успешно вошли в аккаунт' />}
            </div>
        </div>
    );
};

export default Authorization;