import React from 'react';
import { useSelector } from 'react-redux';
import { selectWidth } from './globalSlices/windowWidthSlice';
import NewsSlider from './NewsSlider';
import NewsWithoutSlider from './NewsWithoutSlider';
import './styles/News/News.css'
import Title from './UI/Title/Title';
import NewsItemType from '../types/NewsItem';

const News = () => {
    const windowWidth = useSelector(selectWidth) as number
    const NewsList: NewsItemType[] = [
        {date: new Date(), imageURL: 'url', description: "dada", subDescription: ["st"]},
    ]

    return (
        <div className='News'>
            <Title hType='h1'>новости</Title>
            {
                windowWidth > 1000 ?
                <NewsWithoutSlider NewsList={NewsList} /> :
                <NewsSlider/>
            }
        </div>
    );
};

export default News;