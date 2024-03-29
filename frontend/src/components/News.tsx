import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectWidth } from './globalSlices/windowWidthSlice';
import NewsSlider from './NewsSlider';
import NewsWithoutSlider from './NewsWithoutSlider';
import './styles/News/News.css'
import Title from './UI/Title/Title';
import NewsItemType from '../types/NewsItem';
import axiosRequests from '../classes/axiosRequests';
import { API_URL } from '../http';

const News = () => {
    const windowWidth = useSelector(selectWidth) as number
    const [NewsList, setNewsList] = useState <NewsItemType[]>([])

    useEffect(() => {
        axiosRequests.GET<NewsItemType>(`${API_URL}/news`)
        .then(response => setNewsList(response))
        .catch(e => console.log(e))
    }, [])

    return (
        <div className='News'>
             <Title hType='h1'>новости</Title>
            {
                windowWidth > 1000 ?
                <NewsWithoutSlider NewsList={NewsList} /> :
                <NewsSlider NewsList={NewsList.slice(0, 30)}/>
            } 
        </div>
    );
};

export default News;