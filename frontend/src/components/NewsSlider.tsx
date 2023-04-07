import React, { FC } from 'react';
import NewsItemType from '../types/NewsItem';
import NewsItem from './NewsItem';
import Title from './UI/Title/Title';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper';
import 'swiper/css/scrollbar'
import './styles/NewsSlider/NewsSlider.css'
import { useSelector } from 'react-redux';
import { selectWidth } from './globalSlices/windowWidthSlice';

interface NewsSliderProps{
    NewsList: NewsItemType[];
}


const NewsSlider:FC<NewsSliderProps> = ({NewsList}) => {
    let windowWidth = useSelector(selectWidth) as number
    return (
        <div className='NewsSlider'>
            <Swiper
                style={{height: '600px', marginTop: '36px'}}
                modules={[Scrollbar]}
                spaceBetween={windowWidth > 900 ? -70 : windowWidth > 800 ? 20 : windowWidth > 700 ? 100
                     : windowWidth > 620 ? -200 : windowWidth > 580 ? -150 : windowWidth > 500 ? 70 : windowWidth > 380 ?
                     50 : 100}
                slidesPerView={windowWidth > 700 ? 2 : 1}
                scrollbar={{draggable: true}}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={swiper => console.log(swiper)}
            >
                {
                    NewsList.length !== 0 ?
                    NewsList.map((item: NewsItemType, index2: number) => 
                        <SwiperSlide>
                            <NewsItem
                                _id={item._id}
                                key={index2 + 1}
                                date={item.date}
                                description={item.description}
                                image={item.image}
                                subDescription={item?.subDescription}
                            />
                        </SwiperSlide>)
                    :
                    <div className='NoNews'>
                        <Title hType='h3'>Список новостей пуст....</Title>
                    </div>
                }
            </Swiper>
        </div>
    );
};

export default NewsSlider;