import React from 'react';
import banner from './banner3.png'
import './News.scss'
import {NewsModel} from "../../Models";

interface NewsProps {
    news: NewsModel
}

const News = (props: NewsProps) => {
    return (
        <div className='news'>
            <img className='news__photo' src={props.news.image} />
            <div className='news-item__info'>
                <p className='news-__title'>{props.news.title}</p>
                <p className='news__content'>{props.news.content}</p>
                <p className='news__date'>{props.news.date}</p>
            </div>
        </div>
    );
};

export default News;