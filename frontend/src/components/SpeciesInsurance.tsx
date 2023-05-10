import React from 'react';
import './styles/SpeciesInsurance/SpeciesInsurance.css'
import Title from './UI/Title/Title';
import { useSelector } from 'react-redux';
import { selectWidth } from './globalSlices/windowWidthSlice';

const SpeciesInsurance = () => {
    let windowWidth = useSelector(selectWidth)
    
    return (
        <div className='SpeciesInsurance'>
            {
                windowWidth > 1162 ?
                <Title hType='h1' style={{textAlign: 'left', paddingRight: '20px'}}>Виды<br/> страхования</Title> :
                <Title hType='h1' style={{textAlign: 'left', paddingRight: '20px'}}>Виды страхования</Title>
            }
            <div className="ImagesTargetBlocks">
                <div className="ImagesTargetBlocks__block">
                    <h4 className="ImagesTargetBlocks__block__text">страхование жизни на случай смерти</h4>
                    <div className="ImagesTargetBlocks__block__icon-block">
                        <div className="ImagesTargetBlocks__block__icon-block__icon-wrapper">
                            <div className="ImagesTargetBlocks__block__icon-block__icon-wrapper__icon" id="targetBlocks_1"></div>
                        </div>
                    </div>
                </div>

                <div className="ImagesTargetBlocks__block block-revers">
                    <h4 className="ImagesTargetBlocks__block__text">страхование жизни с условием периодических страховых выплат</h4>
                    <div className="ImagesTargetBlocks__block__icon-block">
                        <div className="ImagesTargetBlocks__block__icon-block__icon-wrapper" >
                            <div className="ImagesTargetBlocks__block__icon-block__icon-wrapper__icon" id="targetBlocks_2"></div>
                        </div>
                    </div>
                </div>


                <div className="ImagesTargetBlocks__block">
                    <h4 className="ImagesTargetBlocks__block__text">страхование от несчастных случаев и болезней</h4>
                    <div className="ImagesTargetBlocks__block__icon-block">
                        <div className="ImagesTargetBlocks__block__icon-block__icon-wrapper">
                            <div className="ImagesTargetBlocks__block__icon-block__icon-wrapper__icon" id="targetBlocks_3"></div>
                        </div>
                    </div>
                </div>

                <div className="ImagesTargetBlocks__block block-revers">
                    <h4 className="ImagesTargetBlocks__block__text">медицинское страхование</h4>
                    <div className="ImagesTargetBlocks__block__icon-block">
                        <div className="ImagesTargetBlocks__block__icon-block__icon-wrapper">
                            <div className="ImagesTargetBlocks__block__icon-block__icon-wrapper__icon" id="targetBlocks_4"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SpeciesInsurance;