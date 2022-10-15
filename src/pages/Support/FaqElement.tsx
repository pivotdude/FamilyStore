import React from 'react';
import plus from './img/plus.svg'
import './FaqElements.scss'

interface FaqElementProps {
    title: string,
    content: string,
}

const FaqElement = (props: FaqElementProps) => {
    return (
        <div className='FAQ-element'>
            <p className='FAQ-element__title'>{props.title}</p>
            <img className='FAQ-element__image' src={plus} />
            <p className='FAQ-element__content'>{props.content}</p>
        </div>
    );
};

export default FaqElement;