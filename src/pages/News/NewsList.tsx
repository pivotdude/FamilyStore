import React from 'react';
import {NewsModel} from "../../Models";
import News from "./News";
import banner from "./banner3.png";
import Banner from "../../components/Banner";

interface NewsListProps {
    news: Array<NewsModel>
}

const NewsList = (props: NewsListProps) => {
    return (
        <div className='news-list'>
            <Banner color='white' image={banner} />

            <div className="container news__container">
                {props.news.map((onenews: NewsModel) => <News key={onenews.id} news={onenews} />)}
            </div>
        </div>
    );
};

export default NewsList;