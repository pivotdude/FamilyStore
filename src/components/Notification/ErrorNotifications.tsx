import React from 'react';
import './ErrorsNoticications.scss'
import Notification from "./Notification";
import {useSelector} from "react-redux";
import {StateModel} from "../../Models";

const ErrorNotifications = () => {
    const errors: Array<string> = useSelector((state: StateModel) => state.app.warnings_notifications)
    if (!errors) {
        return null
    }
    return errors.map((error, index) => <Notification key={index} type='warning' description={error} title='Ошибка' />)
};

export default ErrorNotifications;