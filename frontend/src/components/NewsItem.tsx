import React, { FC } from 'react';
import NewsItemType from '../types/NewsItem';
import './styles/NewsItem/NewsItem.css'



const NewsItem:FC<NewsItemType> = ({date, description, imageURL, subDescription, id}) => {
   
    return (
        <div className='NewsItem'>
            <div className="imgCont"></div>
            <div className="date"> {date} </div>
            <div className="description"> {description} </div>
        </div>
    );
};

export default NewsItem;