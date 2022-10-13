import React from 'react';
import './OurAdvantages.scss'
import delivery from './img/delivery.svg'
import check from './img/check.svg'
import refund from './img/refund.svg'

const OurAdvantages = () => {
    return (
        <div className='OurAdvantages'>
            <div className="OurAdvantages__elem">
                <img className='OurAdvantages__image' src={delivery}/>
                <p className='OurAdvantages__title'>Бесплатная доставка</p>
            </div>

            <div className="OurAdvantages__elem">
                <img className='OurAdvantages__image' src={check}/>
                <p className='OurAdvantages__title'>Проверка товара</p>
            </div>

            <div className="OurAdvantages__elem">
                <img className='OurAdvantages__image' src={refund}/>
                <p className='OurAdvantages__title'>Возврат товара</p>
            </div>

        </div>
    );
};

export default OurAdvantages;