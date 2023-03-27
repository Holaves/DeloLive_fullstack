import React, { useState } from 'react';
import InsuranceProg from './InsuranceProg';
import './styles/InsuranceComp/InsuranceComp.css'
import Title from './UI/Title/Title'


import Health from '../assets/images/Main-images/Health.svg'
import Medicine from '../assets/images/Main-images/Medicine.svg'
import Infinity from '../assets/images/Main-images/InfinityIcon.svg'

interface quantityObj{
    imgPath?: string;
    text: string;
}

interface propsTextBlocksObj{
    transparentBlock: string;
    quantity: quantityObj;
    Paragraph: string;
}

export interface propsTextObj{
    subTitle: string;
    Title: string;
    IconInfo: boolean;
    textBlocks: propsTextBlocksObj[]; 
     
}

const InsuranceComp = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

    let textPropsOne: propsTextObj = {subTitle: 'Программа', Title: '«Здоровье»', IconInfo: false, textBlocks: [
        {transparentBlock: 'до', quantity: {text: '1 000 000 ₽'}, Paragraph: 'сумма страхования'},
        {transparentBlock: 'до', quantity: {text: '10 дней'}, Paragraph: 'денежное возмещение'},
        {transparentBlock: 'от', quantity: {text: '5 лет'}, Paragraph: 'страховой тариф остается неизменным'},
    ]}
    let textPropsTwo: propsTextObj = {subTitle: 'онлайн', Title: 'ДМС', IconInfo: true, textBlocks: [
        {transparentBlock: 'до', quantity: {text: '75 000 ₽'}, Paragraph: 'сумма на каждого застрахованного'},
        {transparentBlock: 'до', quantity: {imgPath: Infinity, text:'чел.'}, Paragraph: 'количество застрахованных по одному договору'},
        {transparentBlock: '45 000 ₽', quantity: {text: '52 000 ₽'}, Paragraph: 'с возможностью увиличить сумму страхования *'},
    ]}

    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
    }, true);

    // Сделать локальное хранилище и поместить в него эти переменные
    return (
        <div className='InsuranceComp'>
            <Title hType='h1'>Страховые программы</Title>
            <div className="programms">
                <InsuranceProg animationSide='left' textProps={textPropsOne} img={Health} />
                <InsuranceProg animationSide='right' textProps={textPropsTwo} img={Medicine}  margintop={windowWidth < 980 ? 30 : 0}/>
            </div>
            
        </div>
    );
};

export default InsuranceComp;