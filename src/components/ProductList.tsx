import React from 'react';
import Product from "./Product";
import './ProductList.scss'
import {ProductModel} from "../Models";

interface ProductsProps {
    products: Array<ProductModel>
}

const ProductList = (props: ProductsProps) => {
    return (
        <div className='products-list'>
            {props.products.map((product: ProductModel) => <Product key={product._id} product={product} />)}
        </div>
    );
};

export default ProductList;