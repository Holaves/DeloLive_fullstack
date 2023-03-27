import React, { FC } from 'react';
import './Title.css'

interface TitleProps{
    children: string | React.ReactNode;
    hType: string | JSX.Element;
    fontSize?: number ;
    style?: object ;
}

const Title: FC<TitleProps> = ({children, hType, fontSize, style}) => {
    return (
        <>
        {   hType === 'h1' ? <h1 className='modeH1' style={style}>{children}</h1>:
            hType === 'h2' ? <h2 className='modeH2' style={style}>{children}</h2> :
            hType === 'h3' ? <h3 className='modeH3' style={style}>{children}</h3> : 
            hType === 'h4' ? <h4 className='modeH4' style={style}>{children}</h4> : hType
        }
        </>
    );
};

export default Title;