import React from 'react';
import {ProductModel} from "../../Models";
import CartProduct from "./CartProduct";

interface CartProductsProps {
    products: Array<ProductModel>
}

const CartProducts = (props: CartProductsProps) => {
    return (
        <div className='cart-products'>
            {props.products.map(el => <CartProduct key={el.id} product={el} />)}
        </div>
    );
};

export default CartProducts;