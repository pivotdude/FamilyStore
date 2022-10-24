import React, {useEffect, useState} from 'react';
import ProductList from "../../components/ProductList";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "./../../redux/actions";

import {ProductModel} from "../../Models";
import './PopularProducts.scss'


// interface PopularProductsProps {
//     products: Array<ProductModel>
// }
//props: PopularProductsProps
const PopularProducts = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.fetchedProducts)
    const loading = useSelector(state => state.app.loading)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    if (loading) {
        return <p>Loading...</p>
    }



    return (
        <div className='popular-product'>
            <p className="popular-product__title">Популярные товары</p>
            <ProductList products={products} />
        </div>
    );
};

export default PopularProducts;