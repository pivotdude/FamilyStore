import React from 'react';
import vacancy from './img/c7dca68f0f4faa53a111e55a37e44d59 1.png'
import './Vacancy.scss'

const Vacancy = () => {
    return (
        <div className="vacancy">
            <img className='vacancy__image' src={vacancy} />
            <div className='vacancy__info'>
                <p className='vacancy__title'>Вакансии</p>
                <a className='button vacancy__button'>Просмотр вакансий</a>
            </div>
        </div>
    );
};

export default Vacancy;