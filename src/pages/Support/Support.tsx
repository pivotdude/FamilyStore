import React from 'react';
import Banner from "../../components/Banner";
import SupportSearch from "./SupportSearch";
import ProblemsElements from "./ProblemsElements";
import FaqElements from "./FaqElements";
import banner from './img/banner-support.png'

const Support = () => {
    return (
        <div className=''>
            <Banner color='white' image={banner}/>
            <div className="container Support__container">
                <SupportSearch />
                <ProblemsElements />
                <FaqElements />
            </div>
        </div>
    );
};

export default Support;