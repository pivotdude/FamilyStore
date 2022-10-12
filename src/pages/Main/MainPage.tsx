import React from 'react';
import NavBar from "../../components/NavBar";
import Banner from './Banner.png'
import Banner1 from './banner1.png'
import Category from "./Category";
import Search from "./Search";
import './MainPage.scss'
import OurAdvantages from './OurAdvantages'
import ProductList from "../../components/ProductList";

const MainPage = () => {

    let products = [
        {id: 1,price: 2002, type: 'Топ', oldPrice: 3240, producer: 'Versuch', rating: {rate: 4.9, count: 26}, photo: 'https://images.wbstatic.net/big/new/69470000/69474532-1.jpg'},
        {id: 2, price: 2002, type: 'Топ', oldPrice: 3240, producer: 'Versuch', rating: {rate: 4.9, count: 26}, photo: 'https://images.wbstatic.net/c516x688/new/14730000/14739120-1.jpg'},
        {id: 3, price: 2002, type: 'Топ', oldPrice: 3240, producer: 'Versuch', rating: {rate: 4.9, count: 26}, photo: 'https://images.wbstatic.net/big/new/19070000/19075889-1.jpg'},
        {id: 4, price: 2002, type: 'Топ', oldPrice: 3240, producer: 'Versuch', rating: {rate: 4.9, count: 26}, photo: 'https://images.wbstatic.net/big/new/27980000/27987701-1.jpg'},
    ]


    return (
        <div className='MainPage'>
            <img className='MainPage__banner' src={Banner} />
            <div className="container MainPage__container">
                <NavBar />
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
                <ProductList products={products} />
                <OurAdvantages />




            </div>
        </div>
    );
};

export default MainPage;