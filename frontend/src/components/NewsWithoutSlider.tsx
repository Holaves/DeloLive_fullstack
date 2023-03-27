import React, { FC } from 'react';
import NewsItem from './NewsItem';
import NewsItemType from '../types/NewsItem';
import './styles/NewsWithoutSlider/NewsWithoutSlider.css'

interface NewsWithoutSliderProps{
    NewsList: NewsItemType[];
}

const NewsWithoutSlider: FC<NewsWithoutSliderProps> = ({NewsList}) => {

    return (
        <div className='NewsWithoutSlider'>
            <div className="NewsList">
                {
                    NewsList.map((item: NewsItemType) =>
                    <NewsItem
                    id={item.id}
                    key={item.id}
                    date={item.date}
                    description={item.description}
                    imageURL={item.imageURL}
                    subDescription={item?.subDescription}
                    />)
                }
            </div>
        </div>
    );
};

export default NewsWithoutSlider;