import React from 'react';
import './Product.scss'
import star from './pinkstar.svg'
import {ProductModel} from "../Models";

interface ProductProps {
    product: ProductModel
}

const Product = (props: ProductProps) => {
    console.log(props.product)
    return (
        <div className='product'>
            <img className='product__photo' src={props.product.photo}/>
            <div className="product-info">
                <div>
                    <p className='product-info__price'>{props.product.price}</p>
                    <p className='product-info__type'>{props.product.type}</p>
                </div>
                <div>
                    <p className='product-info__old-price'>{props.product.oldPrice}</p>
                    <p className='product-info__producer'>{props.product.producer}</p>
                </div>
            </div>
            <div className='product__rating rating'>
                <div className="rating__stars">
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                    <img src={star} />
                </div>
                <p className='rating__count'>{props.product.rating.count}</p>
            </div>
        </div>
    );
};

export default Product;