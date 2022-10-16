import React from 'react';

import Ability from './Ability'
import Banner from "../../components/Banner";

import './About.scss'
import banner from './img/banner2.png'
import AboutBanner from "./AboutBanner";


const About = () => {
    return (
        <div className='about'>
            <Banner color='grey' image={banner} />
            <div className="container about__container">
                <Ability />
                <AboutBanner />
            </div>
        </div>

    );
};

export default About;