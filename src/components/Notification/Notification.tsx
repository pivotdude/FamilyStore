import React, {useEffect, useState} from 'react';
import './Notification.scss'
import question from './question-svgrepo-com.svg'
import warining from './warning-svgrepo-com.svg'
import info from './info-svgrepo-com.svg'
import close from './close.svg'
import check from './checkMark.svg'

interface NotificationProps {
    type: 'info' | 'warning' | 'question' | 'check'
    title: string,
    description: string,
}

const Notification = (props: NotificationProps) => {
    let image, style, isQuestion

    switch (props.type) {
        case "info":
            image = info
            style = 'blue'
            break
        case "question":
            image = question
            style = 'yellow'
            isQuestion = true
            break
        case "warning":
            image = warining
            style = 'red'
            break
        case "check":
            image = check
            style = 'green'
            break
        default:
            image = info
            style = 'blue'
    }

    const CloseHandler = e => {
        e.target.parentElement.style.display = 'none'
    }


    return (
        <div className='notification'>
            <div className={'notification__hr ' + 'notification__hr_' + style}></div>
            <img className='notification__image' src={image} />
            <div>
                <p className='notification__title'>{props.title}</p>
                <p className='notification__description'>{props.description}</p>
            </div>
            {isQuestion
                && <div className='question-buttons'>
                    <p className='question-buttons__button'>Да</p>
                    <p className='question-buttons__button'>Нет</p>
                </div>
            }
            <img src={close} onClick={CloseHandler} className='notification__close' />
        </div>
    );
};

export default Notification;