import React from 'react';
import './Category.scss'

const Category = () => {
    return (
        <div className="category">
            <p className='category__heading'>Категории</p>
            <p className='category__title'>Женщины</p>
            <p className='category__title'>Мужчины</p>
            <p className='category__title'>Дети</p>
            <p className='category__title category__title_child'>от 0 до 1 года</p>
            <p className='category__title category__title_child'>от 1 до 3 лет</p>
            <p className='category__title category__title_child'>от 3 до 5 лет</p>
            <p className='category__title category__title_child'>от 5 до 7 лет</p>
            <p className='category__title category__title_child'>от 7 до 11 лет</p>
            <p className='category__title category__title_child'>от 11 до 15 лет</p>
            <p className='category__title category__title_child'>Подростки</p>
        </div>
    );
};

export default Category;