import React from 'react';
import './CompositeManagement.scss'
import Category from "./Category";
import Search from "./Search";
import Banner1 from './img/banner1.png'
import {Link} from "react-router-dom";


const CompositeManagement = () => {
    return (
        <div className="composite-management">
            <Category />

            <div className="composite-management__search-and-banner">

                <div className='pod-category pod-category_woman'>
                    <Link to={'/products/search/блузки и рубашки'} className='pod-category__el'>Блузки и рубашки</Link>
                    <Link to={'/products/search/Женские брюки'} className='pod-category__el'>Брюки</Link>
                    <Link to={'/products/search/Женская верхняя одежда'} className='pod-category__el'>Верхняя одежда</Link>
                    <Link to={'/products/search/Джинсы женские'} className='pod-category__el'>Джинсы</Link>
                    <Link to={'/products/search/Женские шорты'} className='pod-category__el'>Шорты</Link>
                    <Link to={'/products/search/Юбки'} className='pod-category__el'>Юбки</Link>
                    <Link to={'/products/search/Женские футболки'} className='pod-category__el'>Футболки</Link>
                    <Link to={'/products/search/Женское нижнее бельё'} className='pod-category__el'>Нижнее бельё</Link>
                </div>

                <div className='pod-category pod-category_man'>
                    <Link to={'/products/search/Мужские блузки и рубашки'} className='pod-category__el'>Блузки и рубашки</Link>
                    <Link to={'/products/search/Мужские брюки'} className='pod-category__el'>Брюки</Link>
                    <Link to={'/products/search/Женская верхняя одежда'} className='pod-category__el'>Верхняя одежда</Link>
                    <Link to={'/products/search/Джинсы женские'} className='pod-category__el'>Джинсы</Link>
                    <Link to={'/products/search/Женские шорты'} className='pod-category__el'>Шорты</Link>
                    <Link to={'/products/search/Юбки'} className='pod-category__el'>Юбки</Link>
                    <Link to={'/products/search/Женские футболки'} className='pod-category__el'>Футболки</Link>
                    <Link to={'/products/search/Женское нижнее бельё'} className='pod-category__el'>Нижнее бельё</Link>
                </div>

                <Search />
                <img className='composite-management__banner' src={Banner1} />
            </div>
        </div>
    );
};

export default CompositeManagement;