import React, { FC } from 'react';
import NewsItemType from '../types/NewsItem';
import './styles/NewsItem/NewsItem.css'



const NewsItem:FC<NewsItemType> = ({date, description, imageURL, subDescription}) => {
    const dd = String(date.getDate()).padStart(2, '0')
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const yyyy = date.getFullYear()
    const NowDate = mm + '-' + dd + '-' + yyyy
    
    return (
        <div className='NewsItem'>
            <div className="imgCont"></div>
            <div className="date"> {NowDate} </div>
            <div className="description"> {description} </div>
        </div>
    );
};

export default NewsItem;