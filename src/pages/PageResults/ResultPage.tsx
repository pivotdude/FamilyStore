import React from 'react';
import FoundThings from "./FoundThings";
import Search from "../Main/Search";
import './ResultPage.scss'

const ResultPage = () => {
    return (
        <div className='container ResultPage__container'>
            <Search />
            <FoundThings />
        </div>
    );
};

export default ResultPage;