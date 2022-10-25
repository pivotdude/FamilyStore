import React, {useEffect} from 'react';
import {NewsModel, StateModel} from "../../Models";
import News from "./News";
import banner from "./banner3.png";
import Banner from "../../components/Banner";
import {useDispatch, useSelector} from "react-redux";
import {fetchNews} from '../../redux/actions'

const NewsList = () => {
    const dispatch: Function  = useDispatch()
    const news: Array<NewsModel> | null = useSelector((state: StateModel) => state.news.news)
    const loading: boolean = useSelector((state: StateModel) => state.app.loading)

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
                {news.map((onenews: NewsModel) => <News key={onenews._id} news={onenews} />)}
            </div>
        </div>
    );
};

export default NewsList;