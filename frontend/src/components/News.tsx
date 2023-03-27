import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectWidth } from './globalSlices/windowWidthSlice';
import NewsSlider from './NewsSlider';
import NewsWithoutSlider from './NewsWithoutSlider';
import './styles/News/News.css'
import Title from './UI/Title/Title';
import NewsItemType from '../types/NewsItem';
import { NewsItemInterface } from '../types/interfaces';

const News = () => {
    const windowWidth = useSelector(selectWidth) as number
    const [NewsList, setNewsList] = useState <NewsItemType[]>([])
    
    useEffect(() => {
        fetch('/api/news')
        .then(response => response.json())
        .then(response => setNewsList(response))
    }, [])

    return (
        <div className='News'>
             <Title hType='h1'>новости</Title>
            {
                windowWidth > 1000 ?
                <NewsWithoutSlider NewsList={NewsList.slice(0, 3)} /> :
                <NewsSlider/>
            } 
        </div>
    );
};

export default News;