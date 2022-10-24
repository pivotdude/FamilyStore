import React, {useEffect} from 'react';
import {NewsModel} from "../../Models";
import News from "./News";
import banner from "./banner3.png";
import Banner from "../../components/Banner";
import {useDispatch, useSelector} from "react-redux";
import {fetchNews} from './../../redux/actions'

interface NewsListProps {
    news: Array<NewsModel>
}

const NewsList = () => {

    const dispatch = useDispatch()
    const news = useSelector(state => state.news.news)
    const loading = useSelector(state => state.app.loading)

    useEffect(() => {
        dispatch(fetchNews())
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }


    return (
        <div className='news-list'>
            <Banner color='white' image={banner} />

            <div className="container news__container">
                {news.map((onenews: NewsModel) => <News key={onenews.id} news={onenews} />)}
            </div>
        </div>
    );
};

export default NewsList;