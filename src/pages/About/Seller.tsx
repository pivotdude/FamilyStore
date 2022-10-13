import React from 'react';
import './Seller.scss'
import seller from './img/slider3.jpg'

const Seller = () => {
    return (
        <div className="seller">
            <img src={seller} className='seller__image' />
            <div className='seller__info'>
                <p className='seller__title'>Хотите стать продавцом? </p>
                <a className='button seller__button'>Стать продавцом</a>
            </div>
        </div>
    );
};

export default Seller;