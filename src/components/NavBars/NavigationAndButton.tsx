import React from 'react';
import NavBar from "./NavBar";
import ShowNavBarButton from "./ShowNavBarButton";
import './NavigationAndButton.scss'

const NavigationAndButton = () => {
    return (
        <div className='navigation-and-button'>
            <ShowNavBarButton />
            <NavBar />
        </div>

    );
};

export default NavigationAndButton;