import React, { useEffect, useState } from 'react';
import Title from './UI/Title/Title';
import Button, { ButtonBorderVariant, ButtonTextVariant } from './UI/Button/Button';
import './styles/UsefulButtons/UsefulButtons.css'
import { useSelector } from 'react-redux';
import { selectWidth } from './globalSlices/windowWidthSlice';

const UsefulButtons = () => {
    const windowWidth = useSelector(selectWidth) as number
    const [buttonsWidth, setButtonsWidth] = useState <number>(255)
    useEffect(() => {
        if(windowWidth > 870){
            setButtonsWidth(255)
        }
        else if(windowWidth < 870 && windowWidth > 760){
            setButtonsWidth(240)
        }
        else{
            setButtonsWidth(220)
        }
    }, [windowWidth])
    return (
        <div className='UsefulButtons'>
            <Title hType='h1'>{windowWidth > 730 ? 'полезные кнопки' : <span>полезные<br/>кнопки</span>}</Title>
            <div className="UsefulButtons__buttons">
                <Button
                    margintop={30}
                    text="задать вопрос"
                    variantBorder={ButtonBorderVariant.dirty}
                    variantText={ButtonTextVariant.dirty}
                    height={55}
                    width={buttonsWidth}
                    hovered={true}
                />
                <Button
                    margintop={30}
                    text="калькулятор"
                    variantBorder={ButtonBorderVariant.dirty}
                    variantText={ButtonTextVariant.dirty}
                    height={55}
                    width={buttonsWidth}
                    hovered={true}

                />
                <Button
                    margintop={30}
                    text="Проверить агента"
                    variantBorder={ButtonBorderVariant.dirty}
                    variantText={ButtonTextVariant.dirty}
                    height={55}
                    width={buttonsWidth}
                    hovered={true}
                />
            </div>
        </div>
    );
};

export default UsefulButtons;