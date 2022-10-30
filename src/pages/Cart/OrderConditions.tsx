import React from 'react';
import './mediaQuerry.scss'
import './OrderConditions.scss'


const OrderConditions = () => {
    let count = 1
    let sum = 250

    return (
        <div className='order-conditions'>
            <p className='order-conditions__title'>Условия заказа</p>
            <div className='order-conditions__info'>
                <p className='order-conditions__count'>{count} товара</p>
                <p className='order-conditions__price'>{sum} ₽</p>
            </div>
            <a className='button order-conditions__button'>Оформление</a>
        </div>
    );
};

export default OrderConditions;