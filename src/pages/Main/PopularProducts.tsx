import React from 'react';
import ProductList from "../../components/ProductList";
import {ProductModel} from "../../Models";
import './PopularProducts.scss'

interface PopularProductsProps {
    products: Array<ProductModel>
}

const PopularProducts = (props: PopularProductsProps) => {
    return (
        <div className='popular-product'>
            <p className="popular-product__title">Популярные товары</p>
            <ProductList products={props.products} />
        </div>
    );
};

export default PopularProducts;