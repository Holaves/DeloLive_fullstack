import React from 'react';
import './styles/AboutUs/AboutUs.css'
import Title from './UI/Title/Title';
import { selectScroll } from './globalSlices/scroll';
import { useSelector } from 'react-redux';

const AboutUs = () => {

    const scroll = useSelector(selectScroll)

    return (
        <div className='AboutUs'>
            <Title hType="h1">немного о нас</Title>
            <div className="AboutUs__content">

                <div className="AboutUs__content__head">
                    <div className="AboutUs__content__head__wrapper">

                        <div className="AboutUs__content__head__wrapper__block" data-psevdoText=">" id="block-cav1">
                            <div className="AboutUs__content__head__wrapper__block__text">
                                380<span className='littleText'>мил.руб.</span>
                            </div>
                            <div className="AboutUs__content__head__wrapper__block__subtext">
                                капитала
                            </div>
                        </div>

                        <div className="AboutUs__content__head__wrapper__block" data-psevdoText="~" id="block-tilda">
                            <div className="AboutUs__content__head__wrapper__block__text">
                                78
                            </div>
                            <div className="AboutUs__content__head__wrapper__block__subtext">
                                региональных предстравительств
                            </div>
                        </div>
                        
                        <div className="AboutUs__content__head__wrapper__block" data-psevdoText=">" id="block-cav">
                            <div className="AboutUs__content__head__wrapper__block__text">
                                20
                            </div>
                            <div className="AboutUs__content__head__wrapper__block__subtext">
                                лет на рынке страховых услуг
                            </div>
                        </div>
                        
                        <div className="AboutUs__content__head__wrapper__block">
                            <div className="AboutUs__content__head__wrapper__block__text">
                                ruВВВ
                            </div>
                            <div className="AboutUs__content__head__wrapper__block__subtext">
                                высокий уровень надежности 
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="AboutUs__content__foot">
                   <div className="AboutUs__content__foot__img-cont" id="foot-image1"></div>
                   <div className="AboutUs__content__foot__img-cont" id="foot-image2"></div>
                   <div className="AboutUs__content__foot__img-cont" id="foot-image3"></div>
                   <div className="AboutUs__content__foot__img-cont" id="foot-image4"></div>
                   <div className="AboutUs__content__foot__img-cont" id="foot-image5"></div>
                   <div className="AboutUs__content__foot__img-cont" id="foot-image6"></div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;