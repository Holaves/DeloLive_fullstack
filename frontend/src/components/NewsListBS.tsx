import React, { FC, useEffect, useState } from 'react';
import NewsItemType from '../types/NewsItem';
import { Row, Col } from 'react-bootstrap';
import NewsItem from './NewsItem';
import './styles/NewsListBS/NewsListBS.css'

interface NewsListBSprops{
    NewsList: NewsItemType[];
}

const NewsListBS:FC<NewsListBSprops> = ({NewsList}) => {
    return (
        <div className='NewsListBS'>
                {   
                    NewsList.length !== 0 ?
                    NewsList.map((item: NewsItemType) => 
                        <div className='NewsListBS__item'>
                            <NewsItem
                                style={{marginLeft: "0px", marginTop: '50px'}}
                                key={item._id}
                                image={item.image}
                                _id={item._id}
                                date={item.date}
                                description={item.description}
                                subDescription={item.subDescription}
                            />
                        </div>
                    )
                    :
                    <div className='NoNews'>Список новостей пуст...</div> 
                }
                
        </div>
    );
};

export default NewsListBS;