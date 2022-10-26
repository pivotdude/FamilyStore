import React, {useEffect} from 'react';
import './Registration.scss'
import {Link, useNavigate} from "react-router-dom";
import useInput from "../../hooks/useInput";
import AuthInput from "./AuthInput";
import {useDispatch, useSelector} from "react-redux";
import {StateModel} from "../../Models";
import {authAction, regAction} from "../../redux/actions";

const Registration = () => {
    const navigate = useNavigate()

    const email = useInput()
    const login = useInput()
    const password = useInput()

    const dispatch: Function  = useDispatch()
    const reg: object = useSelector((state: StateModel) => state.authorization.reg)
    const loading: boolean = useSelector((state: StateModel) => state.app.loading)

    useEffect(() => {
        let login = localStorage.getItem("login") ?? null
        if (login) {
            navigate('/authorization')
        }
    }, [reg])

    if (loading) {
        return <p>Loading...</p>
    }



    const submitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = {
            email: email.value,
            password: password.value,
            login: login.value
        }
        dispatch(regAction(data))
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