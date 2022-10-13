import React from 'react';
import contact from './img/contactus-1.jpg'
import './Contact.scss'

const Contact = () => {
    return (
        <div className="contact">
            <img src={contact} className='contact__image' />
            <div className='contact__info'>
                <p className='contact__title'>Контакты</p>
                <a className='button contact__button'>Наши контакты</a>
            </div>
        </div>
    );
};

export default Contact;