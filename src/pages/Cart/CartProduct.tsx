import React from 'react';
import {ProductModel} from "../../Models";
import './CartProuct.scss'
import star from './../../components/pinkstar.svg'

interface CartProductProps {
    product: ProductModel
}

const CartProduct = (props: CartProductProps) => {
    let dl = props.product.description
    if (dl.length > 250) {
        dl = dl.substr(0, 250) + '...'
    }

    let title = props.product.description
    if (title.length > 65) {
        title = title.substr(0, 65) + '...'
    }

    return (
        <div className='cart-product'>
            <img className='cart-product__image' src={props.product.photos.big[0]} />

            <div className='cart-product__info'>
                <p className='cart-product__title'>{title}</p>
                <p className='cart-product__description'>{dl}</p>

                <div className='prices cart-product__prices'>
                    <p className='cart-product__price'>{props.product.price} ₽</p>
                    <p className='cart-product__old-price'>{props.product.oldPrice} ₽</p>
                </div>

                <p className='cart-product__producer'>Versuchi</p>
                <p className='cart-product__type'>Топ</p>

                <div className='rating cart-product__rating'>
                    <div className="rating__stars">
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                        <img src={star} />
                    </div>
                    <p className='rating__count'>{props.product.rating.count}</p>
                </div>

                <p className='cart-product__additional-information'>Розовый 35 размер</p>

                <div className='cart-product__control'>
                    <p className='cart-product__button cart-product__button_left'>В избранное</p>
                    <p className='cart-product__button cart-product__right'>Удалить</p>
                </div>



            </div>



        </div>
    );
};

export default CartProduct;