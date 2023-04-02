import React, { FC, useState } from 'react';
import OfferItemType from '../types/OfferItem';
import './styles/OffersItem/OffersItem.css'
import Button, { ButtonBorderVariant, ButtonTextVariant } from './UI/Button/Button';


const OffersItem: FC<OfferItemType> = ({description, image}) => {
    const [isHover, setIsHover] = useState <boolean>(false)

    const mouseOverHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsHover(true)
    }
    const mouseOutHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsHover(false)
    }


    return (
        <div
        className={isHover ? 'OffersItemDirty' : 'OffersItem'}
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
        >
            <div className="imgCont">
                <img src={image ? image : 'https://pp.userapi.com/c628323/v628323673/38028/ecnXaFJgXik.jpg'} alt="" />
            </div>
            <div className="OffersItem__title">{description}</div>
            <div className="button-block">
                <Button
                text="узнать больше"
                variantBorder={isHover ? ButtonBorderVariant.dirty : ButtonBorderVariant.black}
                variantText={ButtonTextVariant.black}
                height={55}
                width={207}
                />
            </div>
            
        </div>
    );
};

export default OffersItem;