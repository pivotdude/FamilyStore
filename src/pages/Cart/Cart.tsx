import React from 'react';
import './Cart.scss'
import {ProductModel} from "../../Models";
import CartProducts from "./CartProducts";
import OrderConditions from "./OrderConditions";

interface CartProps {
    products: Array<ProductModel>
}

const Cart = (props: CartProps) => {

    if (!props.products[0]) {
        return (
        <div className='cart-empty'>
            <p className='cart-empty__title'>Корзина пуста!</p>
        </div>
        )
    }


    return (
        <div className='container cart__container'>
            <CartProducts products={props.products} />
            <OrderConditions />
        </div>

    );
};

export default Cart;