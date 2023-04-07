import React, { FC } from 'react';
import './styles/SpecialOffers/SpecialOffers.css'
import OfferItemType from '../types/OfferItem';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper';
import 'swiper/css/scrollbar'
import './styles/NewsSlider/NewsSlider.css'
import { useSelector } from 'react-redux';
import { selectWidth } from './globalSlices/windowWidthSlice';
import OffersItem from './OffersItem';
import Title from './UI/Title/Title';

interface SpecialOffersProps{
    offersList: OfferItemType[]
}

const SpecialOffers:FC<SpecialOffersProps> = ({offersList}) => {
    const windowWidth = useSelector(selectWidth) as number

   

    return (
        <div className='SpecialOffers'>
            <Title hType='h1'>спецпредложения</Title>
            <div className="Swiper-wrapper">
                <Swiper
                    style={{height: '530px', marginTop: '40px'}}
                    modules={[Scrollbar]}
                    spaceBetween={windowWidth > 700 ? 50
                        : windowWidth > 620 ? -220 : windowWidth > 580 ? -150 : windowWidth > 500 ? 70 : windowWidth > 380 ?
                        50 : 100}
                    slidesPerView={windowWidth > 700 ? 2 : 1}
                    scrollbar={{draggable: true}}
                >
                    {
                        offersList.length !== 0 ?
                        offersList.map((item: OfferItemType, index: number) => 
                            <SwiperSlide>
                                <OffersItem
                                    _id={item._id}
                                    key={item._id}
                                    description={item.description}
                                    image={item.image}
                                />
                            </SwiperSlide>
                        )
                        :
                        <div className='NoNews'>
                            <Title hType='h3'>Список новостей пуст....</Title>
                        </div>
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default SpecialOffers;