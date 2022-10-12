import React from 'react';
import Banner from './Banner.png'
import Banner1 from './banner1.png'
import Category from "./Category";
import Search from "./Search";
import './MainPage.scss'
import OurAdvantages from './OurAdvantages'
import ProductList from "../../components/ProductList";
import {ProductModel} from "../../Models";

interface MainPageProps {
    products: Array<ProductModel>
}

const MainPage = (props: MainPageProps) => {

    return (
        <div className='MainPage'>
            <img className='banner MainPage__banner' src={Banner} />
            <div className="container MainPage__container">
                <div className="composite-management">
                    <Category />

                    <div className="composite-management__search-and-banner">
                        <Search />
                        <img className='composite-management__banner' src={Banner1} />
                    </div>
                </div>
                <div className="MainPage__product-list-title">
                    <p>Популярные товары</p>
                </div>
                <ProductList products={props.products} />
                <OurAdvantages />




            </div>
        </div>
    );
};

export default MainPage;