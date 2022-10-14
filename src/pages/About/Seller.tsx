import React from 'react';
import seller from './img/slider3.jpg'
import './bannerPage.scss'
import './Seller.scss'

const Seller = () => {
    return (
        <div className="banner-page">
            <img className='banner-page__image' src={seller} />
            <div className='banner-page__info banner-page__info_seller'>
                <p className='banner-page__title banner-page__title_white'>Хотите стать продавцом?</p>
                <a className='button banner-page__button banner-page__button_seller'>Стать продавцом</a>
            </div>
        </div>
    );
};

export default Seller;