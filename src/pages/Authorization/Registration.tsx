import React, {useEffect, useState} from 'react';
import './Registration.scss'
import {Link, useNavigate} from "react-router-dom";
import useInput from "../../hooks/useInput";
import AuthInput from "./AuthInput";
import {useDispatch, useSelector} from "react-redux";
import {regModel, StateModel} from "../../Models";
import {clearReg, regAction, setNotifSubmit, setNotifWarning} from "../../redux/actions";
import Notification from "../../components/Notification/Notification";

const Registration = () => {
    const navigate = useNavigate()

    const email = useInput('email','email')
    const login = useInput('login', 'text')
    const password = useInput('password', 'password')

    const dispatch: Function  = useDispatch()
    const reg: regModel = useSelector((state: StateModel) => state.authorization.reg)
    const loading: boolean = useSelector((state: StateModel) => state.app.loading)
    const errors: Array<string> = useSelector((state: StateModel) => state.app.warnings_notifications)
    const submits: Array<string> = useSelector((state: StateModel) => state.app.submits_notifications)

    useEffect(() => {
        if (reg.success == true) {
            let arr = [...submits, reg.message]
            dispatch(setNotifSubmit(arr))
            dispatch(clearReg())
        }
    }, [reg])


    useEffect(() => {
        if (reg.success == false) {
            let arr = []
            if (reg.message instanceof Array) {
                let arr = reg.message.map(i => i.msg)
                dispatch(setNotifWarning([...errors, ...arr]))
                dispatch(clearReg())
            } else {
                dispatch(setNotifWarning([...errors, reg.message]))
                dispatch(clearReg())
            }

        }}, [reg])

    useEffect(() => {
        if (localStorage.getItem('login')) {
            navigate('/profile')
        }
    }, [])

    //        if (reg.success == true) {
    //             navigate('/authorization')
    //         }

    const submitHandler  = (e: React.ChangeEvent<HTMLInputElement>)  => {
        dispatch(setNotifWarning([]))
        dispatch(setNotifSubmit([]))
        const data = {
            email: email.value,
            password: password.value,
            login: login.value
        }
        dispatch(regAction(data))
    }

    return (
            <div className='container authorization__container'>
                {/*{errors && <pre>{errors}</pre>}*/}
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
    );
};

export default Registration;