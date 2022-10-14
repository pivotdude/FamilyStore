import React from 'react';
import vacancy from './img/c7dca68f0f4faa53a111e55a37e44d59 1.png'
import './bannerPage.scss'
import './Vacancy.scss'

const Vacancy = () => {
    return (
        <div className="banner-page">
            <img className='banner-page__image' src={vacancy} />
            <div className='banner-page__info banner-page__info_vacancy'>
                <p className='banner-page__title banner-page__title__white'>Есть вакансии</p>
                <a className='button banner-page__button banner-page__button_vacancy'>Вакансий</a>
            </div>
        </div>
    );
};

export default Vacancy;