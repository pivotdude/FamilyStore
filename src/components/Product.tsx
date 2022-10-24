import React from 'react';
import './Product.scss'
import star from './pinkstar.svg'
import {ProductModel} from "../Models";

interface ProductProps {
    product: ProductModel
}

const Product = (props: ProductProps) => {
    return (
        <div className='product'>
            <img className='product__photo' src={props.product.photos.small[1]} alt={props.product.type}/>

            <div className="product-info">
                <div className='product-info__col1'>
                    <a>{props.product.title}</a>

                    <div style={{display: 'flex', textAlign: 'center'}}>
                        <p className='product-info__price'>{props.product.price}</p>
                        <p className='product-info__old-price'>{props.product.oldPrice}</p>
                    </div>

                    <p className='product-info__type'>{props.product.type}</p>
                </div>
                <div className='product-info__col2'>

                    <p className='product-info__producer'>{props.product.producer}</p>
                </div>
            </div>
            <div className='rating product__rating'>
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