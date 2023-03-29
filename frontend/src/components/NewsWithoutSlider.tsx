import React, { FC, useState } from 'react';
import NewsItem from './NewsItem';
import NewsItemType from '../types/NewsItem';
import './styles/NewsWithoutSlider/NewsWithoutSlider.css'
import Title from './UI/Title/Title';
import Button, { ButtonBorderVariant, ButtonTextVariant } from './UI/Button/Button';


interface NewsWithoutSliderProps{
    NewsList: NewsItemType[];
}

const NewsWithoutSlider: FC<NewsWithoutSliderProps> = ({NewsList}) => {
    return (
        <div className='NewsWithoutSlider'>
            <div className="NewsList">
                {
                    NewsList.length !== 0 ?
                    NewsList.map((item: NewsItemType) =>
                    <NewsItem
                    id={item.id}
                    key={item.id}
                    date={item.date}
                    description={item.description}
                    image={item.image}
                    subDescription={item?.subDescription}
                    />)
                    :
                    <div className='NoNews'>
                        <Title hType='h3'>Список новостей пуст....</Title>
                    </div>
                }
            </div>
            {
                NewsList.length > 3 ?
                <div className="buttonCont">
                    <Button
                        text='Смотреть все  -->'
                        variantBorder={ButtonBorderVariant.black}
                        variantText={ButtonTextVariant.black}
                        height={50}
                        width={265}
                        margintop={38}
                    />
                </div>
                :
                <div></div>
            }
        </div>
    );
};

export default NewsWithoutSlider;