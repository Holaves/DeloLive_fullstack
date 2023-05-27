import React, { FC, useState } from 'react';
import './styles/Trigger/Trigger.css'
import Button, { ButtonBorderVariant, ButtonTextVariant } from './UI/Button/Button';
import { useSizes } from '../hooks/useSizes';
import { TriggerWH } from './globalSlices/windowWidthSlice';

interface TriggerProps{
    imgPath: string;
    title: string;
    buttonText: string;
    buttonTextTwo?: string;
    titles: string[];
}



const Trigger: FC<TriggerProps> = ({imgPath, title, buttonText, buttonTextTwo, titles}) => {
    const [isHover, setIsHover] = useState(false)

    
    const mouseOverHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsHover(true)
    }
    const mouseOutHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsHover(false)
    }
    
    
    
    return (
        <div
            className={isHover ? 'TriggerDirty' : 'Trigger'}
            onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler}
        >   
           <div className="Trigger__elements-container">
            <div className="Img_and_Title">
            <h1 className="Trigger__title"
            style={{marginTop: title.trim().split(/\s+/).length >= 2 ? '50px' : '74px'}}
            >{title}</h1>
            <div
            className="Trigger__image-cont flip-horizontal-bottom"
            style={{width: useSizes(TriggerWH, 'width', title),
            // Костыль!
            height:  useSizes(TriggerWH, 'height', title)}} 
            >   
                <img src={imgPath} alt="f" />   
            </div>
            </div>
            <div className="buttons" style={{marginTop: buttonTextTwo ? '63px' : '96px'}}>
                <>
                    <Button
                        text={buttonText}
                        height={50}
                        width={255}
                        variantBorder={isHover ? ButtonBorderVariant.dirty : ButtonBorderVariant.black}
                        variantText={isHover ? ButtonTextVariant.dirty : ButtonTextVariant.black}
                    />
                    {
                    buttonTextTwo ?
                    <div style={{marginTop: '31px'}}>
                        <Button
                        text={buttonTextTwo}
                        height={50}
                        width={255}
                        variantBorder={isHover ? ButtonBorderVariant.dirty : ButtonBorderVariant.black}
                        variantText={isHover ? ButtonTextVariant.dirty : ButtonTextVariant.black}
                        />
                    </div>
                    :
                    <div></div>
                    }
                </>
            </div>
           </div>
        </div>
    );
};

export default Trigger;