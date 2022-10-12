import React from 'react';
import {NewsModel} from "../../Models";
import News from "./News";
import banner from "./banner3.png";

interface NewsListProps {
    news: Array<NewsModel>
}

const NewsList = (props: NewsListProps) => {
    return (
        <div className='news-list'>
            <div className='banner news-list__banner'><img src={banner} /></div>
            <div className="container news__container">
                {props.news.map((onenews) => <News key={onenews.id} news={onenews} />)}
            </div>
        </div>
    );
};

export default NewsList;