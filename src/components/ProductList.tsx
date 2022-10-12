import React from 'react';
import Product from "./Product";
import './ProductList.scss'
import {ProductModel} from "../Models";

interface ProductsProps {
    products: Array<ProductModel>
}

const ProductList = (props: ProductsProps) => {
    let products = props.products
    return (
        <div className='product-list'>
            {products.map((product: ProductModel) => <Product key={product.id} product={product} />)}
        </div>
    );
};

export default ProductList;