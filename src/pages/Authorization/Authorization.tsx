import React, {useEffect} from 'react';
import './Authorization.scss'
import AuthInput from "./AuthInput";
import {Link} from "react-router-dom";
import useInput from "../../hooks/useInput";
import {useDispatch, useSelector} from "react-redux";
import {StateModel} from "../../Models";
import {authAction} from "../../redux/actions";
import {useNavigate} from "react-router-dom";

const Authorization = () => {
    const navigate = useNavigate()
    const email = useInput()
    const password = useInput()

    const dispatch: Function  = useDispatch()
    const auth: object = useSelector((state: StateModel) => state.authorization.auth)
    const loading: boolean = useSelector((state: StateModel) => state.app.loading)

    useEffect(() => {
        if (auth) {
            console.log(auth)
            localStorage.setItem("login", JSON.stringify([auth.token, auth.UserId]))
        }}, [auth])

    useEffect(() => {
        let login = localStorage.getItem("login") ?? null
        if (login) {
            navigate('/')
        }
    }, [auth])



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
            </div>
        </div>
    );
};

export default Authorization;