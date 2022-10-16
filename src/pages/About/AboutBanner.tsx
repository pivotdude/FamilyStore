import React from 'react';
import './AboutBanner.scss'
import vacancy from './img/c7dca68f0f4faa53a111e55a37e44d59 1.png'
import seller from './img/slider3.jpg'
import contact from './img/contactus-1.jpg'

const AboutBanner = () => {
    return (
        <div className='about-banners'>

            <div className="about-banner">
                <img className='about-banner__image' src={vacancy} />
                <div className='about-banner__info about-banner__info_vacancy'>
                    <p className='about-banner__title'>Есть вакансии</p>
                    <a className='button about-banner__button about-banner__button_vacancy'>Вакансий</a>
                </div>
            </div>

        <div className="about-banner">
            <img className='about-banner__image' src={seller} />
            <div className='about-banner__info about-banner__info_seller'>
                <p className='about-banner__title about-banner__title_white'>Хотите стать продавцом?</p>
                <a className='button about-banner__button about-banner__button_seller'>Стать продавцом</a>
            </div>
        </div>

        <div className="about-banner">
            <img className='about-banner__image' src={contact} />
            <div className='about-banner__info about-banner__info_contact'>
                <p className='about-banner__title'>Контакты</p>
                <a className='button about-banner__button about-banner__button_contact'>Наши контакты</a>
            </div>
        </div>
        </div>
    );
};

export default AboutBanner;