import React, { FC } from 'react';
import './subDescriptionEl.css'

interface SubDescriptionElProps{
    subDescriptionText: string | undefined;
}

const SubDescriptionEl: FC<SubDescriptionElProps> = ({subDescriptionText}) => {
    
    return (
        <>
            {
                subDescriptionText !== undefined ?
                <div className='subDescription'>
                    <div className="subDescription__content">{subDescriptionText}</div>
                </div>
                :
                <div></div>
            }
        </>
        
        
    );
};

export default SubDescriptionEl;