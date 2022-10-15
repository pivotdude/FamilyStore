import React from 'react';
import Banner from "../../components/Banner";
import Search from "./Search";
import ProblemsElements from "./ProblemsElements";
import FaqElements from "./FaqElements";
import banner from './img/banner-support.png'


const Support = () => {
    return (
        <div className=''>
            <Banner color='white' image={banner}/>
            <div className="container Support__container">
                <Search />
                <ProblemsElements />
                <FaqElements />
            </div>
        </div>
    );
};

export default Support;