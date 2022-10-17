import React from 'react';
import './OrderConditions.scss'

const OrderConditions = () => {
    let p = document.querySelectorAll('p.cart-product__price')
    let arr = []
    let count = p.length
    for (let i of p) {
        arr.push(i.textContent.replace(' ₽', ''))
    }
    let sum = arr.reduce((total, currentValue) => total + Number(currentValue), 0);


    return (
        <div className='order-conditions'>
            <p className='order-conditions__title'>Условия заказа</p>

            <div className='order-conditions__info'>
                <p className='order-conditions__count'>{count} товара</p>
                <p className='order-conditions__price'>{sum} Р</p>
            </div>
            <a className='button order-conditions__button'>Оформление</a>
        </div>
    );
};

export default OrderConditions;