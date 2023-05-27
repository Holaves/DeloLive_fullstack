import React, { FC, useState } from 'react';
import { propsTextObj } from './InsuranceComp';
import './styles/InsuranceProg/InsuranceProg.css'
import Button, { ButtonBorderVariant, ButtonTextVariant } from './UI/Button/Button';
import { useSizes } from '../hooks/useSizes'
import { selectWidth } from './globalSlices/windowWidthSlice';
import { useSelector } from 'react-redux';
import { InsuranceWH } from './globalSlices/windowWidthSlice';
import { selectScroll } from './globalSlices/scroll'

interface InsuranceProgProps {
    textProps: propsTextObj;
    img: string;
    animationSide: "left" | "right";
    margintop?: number;
}

const InsuranceProg: FC<InsuranceProgProps> = ({textProps, img, margintop, animationSide}) => {
    const [isHover, setIsHover] = useState <boolean>(false)
    const windowWidth2: number = useSelector(selectWidth)
    const title: string = textProps.Title
    const [animationState, setAnimationState] = useState <boolean>(false)
    const scrollTop = useSelector(selectScroll) as number

    setInterval(() => {
        if(scrollTop >= 370){
            scrollEvent()
        }
    }, 100)
        

    const scrollEvent = () => {
        setAnimationState(true);
    }
    const mouseOverHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsHover(true)
    }
    const mouseOutHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsHover(false)
    }

    return (
        <div
            className={!animationState ? `InsuranceProgAnimation${animationSide.charAt(0).toUpperCase() + animationSide.slice(1)}` : isHover ? 'InsuranceProgDirty' : 'InsuranceProg'}
            onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler}
            style={{marginTop: margintop ? margintop : 0}}
        >
            <div className="containerForWrapperProg">
                <div className="InsuranceProg__wrapper">
                    <div className="InsuranceProg__wrapper__Title-Image">
                        <div className="InsuranceProg__wrapper__Title-Image__Title">
                            <div className="InsuranceProg__wrapper__Title-Image__Title__SubTitle">
                                <h2 className={!animationState ? 'text-focus-in' : 'none'}>{textProps.subTitle}</h2>
                                    {textProps.IconInfo ?
                                        <div className="iconInfo"></div> :
                                        <div></div>
                                    }
                            </div>
                            <h1 className="InsuranceProg__wrapper__Title-Image__Title__Title">{textProps.Title}</h1>
                        </div>
                        <div
                            className="InsuranceProg__wrapper__Title-Image__Image"
                            style={{
                                width: useSizes(InsuranceWH, 'width', title),
                                height: useSizes(InsuranceWH, 'height', title)
                            }}
                        >
                            <img src={img} alt="" />
                        </div>
                        {windowWidth2 <= 1000 && windowWidth2 > 480? 
                            <Button
                            text='КУПИТЬ'
                            variantBorder={isHover ? ButtonBorderVariant.dirty : ButtonBorderVariant.black}
                            variantText={isHover ? ButtonTextVariant.black : ButtonTextVariant.black}
                            height={50}
                            width={211}
                            margintop={38}
                        /> :
                        <div></div>}
                    </div>
                    <div className="InsuranceProg__wrapper__textBlocks">
                        {textProps.textBlocks.map((item, i) => {
                            if(i === 1)
                            {
                                return(
                                    <div className="InsuranceProg__wrapper__textBlocks__item" key={i + 1}>
                                        <div>
                                            <div className="foofoofoo">
                                                <span className="transparentText">{item.transparentBlock}</span>
                                                <span className={item.quantity.imgPath ? 'quantityObg' : 'quantity'}>
                                                    <img src={item.quantity.imgPath} alt="" /><span>{item.quantity.text}</span>
                                                </span>
                                            </div>
                                            <p className='oofoofoof'>{item.Paragraph}</p>
                                        </div>
                                    </div>
                                )
                            }
                            else
                            {
                                return (
                                    <div className="InsuranceProg__wrapper__textBlocks__item" key={i + 1}>
                                        <div>
                                            <div className="foofoofoo">
                                                <span className="transparentText">{item.transparentBlock}</span>
                                                <span className={item.quantity.imgPath ? 'quantityObg' : 'quantity'}>
                                                    <img src={item.quantity.imgPath} alt="" /><span>{item.quantity.text}</span>
                                                </span>
                                            </div>
                                            <p className='oofoofoof'>{item.Paragraph}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                        <div className='before1000pxButton'>
                            <Button
                                text='КУПИТЬ'
                                variantBorder={isHover ? ButtonBorderVariant.dirty : ButtonBorderVariant.black}
                                variantText={isHover ? ButtonTextVariant.black : ButtonTextVariant.black}
                                height={50}
                                width={211}
                                margintop={50}
                            />
                        </div>
                    </div>
                    
                    
                </div>
                <div className='after480pxButton'>
                {windowWidth2 <= 480 && windowWidth2 > 320? 
                        <Button
                        text='КУПИТЬ'
                        variantBorder={isHover ? ButtonBorderVariant.dirty : ButtonBorderVariant.black}
                        variantText={isHover ? ButtonTextVariant.black : ButtonTextVariant.black}
                        height={50}
                        width={211}
                        margintop={67}
                    /> :
                    <div></div>
                }
                </div>
            </div>
        </div>
    );
};

export default InsuranceProg;