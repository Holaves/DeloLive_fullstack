import React, { FC, useState } from 'react';
import NewsItemType from '../types/NewsItem';
import './styles/NewsItem/NewsItem.css'
import SubDescriptionEl from './UI/subDescription/SubDescriptionEl';


const NewsItem:FC<NewsItemType> = ({date, description, image, subDescription}) => {
    const [descriptionFullD, setDescriptionFullD] = useState <string>('')

    function truncate(str: string, n: number): string{
        return (str.length > n) ? str.slice(0, n-1) + '...' : str;
    };
   
    return (
        <div className='NewsItem'>
            <div className="imgCont">
                <img src={image ? image : 'https://pp.userapi.com/c628323/v628323673/38028/ecnXaFJgXik.jpg'} alt="" />
            </div>
            <div className="date"> {date} </div>
            <div className="description"> {truncate(description, 95)} </div>
            <div className="subDescriptionList">
                {
                    subDescription ? 
                    subDescription.map((item) => <SubDescriptionEl subDescriptionText={item} />) :
                    <div></div>
                }
            </div>
        </div>
    );
};

export default NewsItem;