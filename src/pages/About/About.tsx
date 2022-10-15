import React from 'react';

import Ability from './Ability'
import Banner from "../../components/Banner";
import Seller from './Seller'
import Vacancy from "./Vacancy";
import Contact from "./Contact";

import './About.scss'
import banner from './img/banner2.png'


const About = () => {
    return (
        <div className='about'>
            <Banner color='grey' image={banner} />
            <div className="container about__container">
                <Ability />
                <div className="banners-page">
                    <Vacancy />
                    <Seller />
                    <Contact />
                </div>
            </div>
        </div>

    );
};

export default About;