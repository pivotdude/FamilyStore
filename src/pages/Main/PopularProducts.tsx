import React, {useEffect} from 'react';
import ProductList from "../../components/ProductList";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../redux/actions";
import './PopularProducts.scss'
import {ProductModel, StateModel} from "../../Models";

const PopularProducts = () => {
    const dispatch: Function  = useDispatch()
    const products: Array<ProductModel> | null = useSelector((state: StateModel) => state.products.fetchedProducts)
    const loading: boolean = useSelector((state: StateModel) => state.app.loading)

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