import React from 'react';

import OurAdvantages from './OurAdvantages'
import ProductList from "../../components/ProductList";
import Banner from "../../components/Banner";
import CompositeManagement from "./CompositeManagement";

import './MainPage.scss'
import {ProductModel} from "../../Models";
import banner from './img/Banner.png'

interface MainPageProps {
    products: Array<ProductModel>
}

const MainPage = (props: MainPageProps) => {

    return (
        <div className='MainPage'>
            <Banner color='pink' image={banner} />
            <div className="container MainPage__container">
                <CompositeManagement />

                <div>
                    <p className="MainPage__product-list-title">Популярные товары</p>
                    <ProductList products={props.products} />
                </div>

                <OurAdvantages />
            </div>
        </div>
    );
};

export default MainPage;