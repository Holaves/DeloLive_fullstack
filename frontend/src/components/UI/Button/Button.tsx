import React, { FC, useState } from 'react';
import './Button.css'

export enum ButtonBorderVariant {
    dirty = 'dirty',
    black = 'black'

}
export enum ButtonTextVariant {
    black = 'black',
    dirty = 'dirty'
}

interface ButtonProps{
    text: string;
    height?: number;
    width?: number;
    variantBorder: ButtonBorderVariant;
    variantText: ButtonTextVariant;
    onClick?: () => void;
    margintop?: number;
    hovered?: boolean;
}

const Button: FC<ButtonProps> = ({onClick, hovered, height, width, variantBorder, variantText, text, margintop}) => {
    const [isHover, setIsHover] = useState <boolean>(false)
   
    const mouseOverHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsHover(true)
    }
    const mouseOutHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsHover(false)

    }

    return (
       <div className='Button' style={{marginTop: margintop ? margintop : 0}}>
         <div
            onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler}  
            onClick={() => onClick}
            style={{height: height, width: width}}
            className={variantBorder === ButtonBorderVariant.dirty && hovered && isHover ? 'dirtyBorder' : 'blackBorder'}
        >
            <h2
                className={variantText === ButtonTextVariant.dirty && hovered && isHover ? 'dirtyText' : 'blackText'}
            >
                {text}
            </h2>
        </div>
       </div>
    );
};

export default Button;