import React from 'react';
import {useSelector} from "react-redux";
import {StateModel} from "../../Models";
import Notification from "./Notification";

const SubmitNotifications = () => {
    const submits: Array<string> = useSelector((state: StateModel) => state.app.submits_notifications)
    if (!submits) {
        return null
    }
    return submits.map((submit, index) => <Notification key={index} type='check' description={submit} title='Поздравляю' />)
};

export default SubmitNotifications;