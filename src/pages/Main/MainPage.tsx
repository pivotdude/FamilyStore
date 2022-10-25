import React from 'react';
import OurAdvantages from './OurAdvantages'
import Banner from "../../components/Banner";
import CompositeManagement from "./CompositeManagement";
import banner from './img/Banner.png'
import PopularProduct from './PopularProducts'

const MainPage = () => {

    return (
        <div className='MainPage'>
            <Banner color='pink' image={banner} />
            <div className="container MainPage__container">
                <CompositeManagement />
                <PopularProduct />
                <OurAdvantages />
            </div>
        </div>
    );
};

export default MainPage;