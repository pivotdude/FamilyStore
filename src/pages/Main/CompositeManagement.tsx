import React from 'react';
import './CompositeManagement.scss'
import Category from "./Category";
import Search from "./Search";
import Banner1 from './img/banner1.png'


const CompositeManagement = () => {
    return (
        <div className="composite-management">
            <Category />

            <div className="composite-management__search-and-banner">
                <Search />
                <img className='composite-management__banner' src={Banner1} />
            </div>
        </div>
    );
};

export default CompositeManagement;