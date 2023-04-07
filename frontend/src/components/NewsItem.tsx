import React, { FC, useState, CSSProperties } from 'react';
import NewsItemType from '../types/NewsItem';
import './styles/NewsItem/NewsItem.css'
import SubDescriptionEl from './UI/subDescription/SubDescriptionEl';
import { Link } from 'react-router-dom';

interface NewsItemProps extends NewsItemType{
    style?: CSSProperties | undefined;
}

const NewsItem:FC<NewsItemProps> = ({date, description, image, subDescription, _id, style}) => {
    const [isHover, setIsHover] = useState <boolean>(false)

    const mouseOverHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsHover(true)
    }
    const mouseOutHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsHover(false)
    }

    function truncate(str: string, n: number): string{
        return (str.length > n) ? str.slice(0, n-1) + '...' : str;
    };
   
    return (
        <Link to={`/news/${_id}`}  style={{textDecoration: "none"}}>
            <div
            style={style}
            className={isHover ? 'NewsItemDirty' : 'NewsItem'}
            onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler}
            >
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
        </Link>
        
    );
};

export default NewsItem;