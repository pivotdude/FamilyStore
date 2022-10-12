import React from 'react';
import './OurAdvantages.scss'
import delivery from './delivery.svg'
import check from './check.svg'
import refund from './refund.svg'

const OurAdvantages = () => {
    return (
        <div className='OurAdvantages'>
            <div className="OurAdvantages__elem">
                <img className='OurAdvantages__img' src={delivery}/>
                <p className='OurAdvantages__title'>Бесплатная доставка</p>
            </div>

            <div className="OurAdvantages__elem">
                <img className='OurAdvantages__img' src={check}/>
                <p className='OurAdvantages__title'>Проверка товара</p>
            </div>

            <div className="OurAdvantages__elem">
                <img className='OurAdvantages__img' src={refund}/>
                <p className='OurAdvantages__title'>Возврат товара</p>
            </div>

        </div>
    );
};

export default OurAdvantages;