import React from 'react';
import contact from './img/contactus-1.jpg'
import './Contact.scss'
import './bannerPage.scss'

const Contact = () => {
    return (
        <div className="banner-page">
            <img className='banner-page__image' src={contact} />
            <div className='banner-page__info banner-page__info_contact'>
                <p className='banner-page__title banner-page__title__white'>Контакты</p>
                <a className='button banner-page__button banner-page__button_contact'>Наши контакты</a>
            </div>
        </div>
    );
};

export default Contact;