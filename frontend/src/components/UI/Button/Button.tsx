import React, { FC } from 'react';
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
}

const Button: FC<ButtonProps> = ({onClick, height, width, variantBorder, variantText, text, margintop}) => {
    return (
       <div className='Button' style={{marginTop: margintop ? margintop : 0}}>
         <div
            onClick={() => onClick}
            style={{height: height, width: width}}
            className={variantBorder === ButtonBorderVariant.dirty ? 'dirtyBorder' : 'blackBorder'}
        >
            <h2
                className={variantText === ButtonTextVariant.dirty ? 'dirtyText' : 'blackText'}
            >
                {text}
            </h2>
        </div>
       </div>
    );
};

export default Button;