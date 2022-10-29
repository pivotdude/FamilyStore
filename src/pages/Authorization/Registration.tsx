import React, {useEffect, useState} from 'react';
import './Registration.scss'
import {Link, useNavigate} from "react-router-dom";
import useInput from "../../hooks/useInput";
import AuthInput from "./AuthInput";
import {useDispatch, useSelector} from "react-redux";
import {regModel, StateModel} from "../../Models";
import {authAction, regAction} from "../../redux/actions";
import Notification from "../../components/Notification/Notification";

const Registration = () => {
    const navigate = useNavigate()

    const email = useInput('email','email')
    const login = useInput('login', 'text')
    const password = useInput('password', 'password')

    const dispatch: Function  = useDispatch()
    const reg: regModel = useSelector((state: StateModel) => state.authorization.reg)
    const loading: boolean = useSelector((state: StateModel) => state.app.loading)

    const [success, setSuccess] = useState(false)
    const [errors, setErrors] = useState()

    useEffect(() => {
        if (reg.success == true) {
            setSuccess(true)
        }
    }, [reg])


    useEffect(() => {
        if (reg.success == false) {
            let arr = []
            if (reg.message instanceof Array) {
                arr = reg.message.map(i => i.msg)
                setErrors(arr)
            } else {
                arr.push(reg.message)
                setErrors(arr)
            }

        }}, [reg])


    if (loading) {
        return <p>Loading...</p>
    }

    //        if (reg.success == true) {
    //             navigate('/authorization')
    //         }




    const submitHandler  = (e: React.ChangeEvent<HTMLInputElement>)  => {
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
                {errors && errors.map(item => <Notification  type='warning' description={item} title='Ошибка' />)}
                {success && <Notification type='check' title='Вы вошли' description='Вы успешно зарегестрировали аккаунт' />}
            </div>
        </div>
    );
};

export default Registration;