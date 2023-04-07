import React, { FC, useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import NewsItemType from '../types/NewsItem';
import './styles/NewsWithoutSlider/NewsWithoutSlider.css'
import Title from './UI/Title/Title';
import Button, { ButtonBorderVariant, ButtonTextVariant } from './UI/Button/Button';
import axiosRequests from '../classes/axiosRequests';
import { Link } from 'react-router-dom';

interface NewsWithoutSliderProps{
    NewsList: NewsItemType[];
}

const NewsWithoutSlider: FC<NewsWithoutSliderProps> = ({NewsList}) => {
    const [fullNewsList, setFullNewsList] = useState <NewsItemType[]>([])
    
    useEffect(() => {
        axiosRequests.GET<NewsItemType>('/api/news')
        .then(response => setFullNewsList(response))
        .catch(e => console.log(e))
    }, [])

    return (
        <div className='NewsWithoutSlider'>
            <div className="NewsList">
                {
                    NewsList.length !== 0 ?
                    NewsList.map((item: NewsItemType, index: number) =>
                     <NewsItem
                        _id={item._id}
                        key={index + 1}
                        date={item.date}
                        description={item.description}
                        image={item.image}
                        subDescription={item?.subDescription}
                    />
                    )
                    :
                    <div className='NoNews'>
                        <Title hType='h3'>Список новостей пуст....</Title>
                    </div>
                }
            </div>
            {
                fullNewsList.length > 3 ?
                <div className="buttonCont">
                    <Link to='/news' style={{textDecoration:"none"}}>
                        <Button
                            text='Смотреть все  -->'
                            variantBorder={ButtonBorderVariant.black}
                            variantText={ButtonTextVariant.black}
                            height={50}
                            width={265}
                            margintop={38}
                        />
                    </Link>
                </div>
                :
                <div></div>
            }
        </div>
    );
};

export default NewsWithoutSlider;