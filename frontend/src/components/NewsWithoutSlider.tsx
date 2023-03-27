import React, { FC } from 'react';
import NewsItem from './NewsItem';
import NewsItemType from '../types/NewsItem';

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