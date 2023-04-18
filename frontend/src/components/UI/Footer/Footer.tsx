import React from 'react';
import './Footer.css'
import Button, { ButtonBorderVariant, ButtonTextVariant } from '../Button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='Footer'>
           <div className="_container-1">
                <div className="routeAndContact">
                    <Row>
                        <Col>
                            <div className="navigationBar">
                                <ul>
                                    <li>Главная</li><br/>
                                    <li>О нас</li><br/>
                                    <li>Новости</li><br/>
                                    <li>Спецпредложения</li>
                                    <li>Бизнес предложения</li><br/>
                                    <li>Твое будущее</li><br/>
                                    <li>Защита себя и близких</li>
                                    <li>Защита сотрудников</li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className='navigationBar'>
                                <ul>
                                    <li>Cтраховая документация</li>
                                    <li>Финансовые показатели</li><br/>
                                    <li>Контакты</li><br/>
                                    <li>Карта сайта</li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className='addresTime'>
                                <div className="darkText">125252, г. Москва, ул. Зорге, д.22А, офис 811</div>
                                <div className="Time darkText">
                                    График работы главного офиса<br/>
                                    125252, г. Москва, <br/>
                                    ул. Зорге, д. 22 А, офис 811<br/>
                                    Пн. - Чт. с 9:00 до 18:00<br/>
                                    Пт.  с 9:00 до 16:45 <br/>
                                    Сб-Вс выходной
                                </div>
                                <Button
                                    text="как добраться"
                                    margintop={80}
                                    variantBorder={ButtonBorderVariant.black}
                                    variantText={ButtonTextVariant.dirty}
                                    height={55}
                                    width={265}
                                    hovered={true}
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className='contacts'>
                                <div className="darkText">Адрес для почтовых отправлений:<br/>125252, г. Москва, а/я 28</div>
                                <div className="telephone">+7 918 490 60 59</div>
                                <div className="email">
                                    <h4>Email для связи с нами</h4>
                                    <a href='mailto:timyr.gggd@gmail.com'>timyr.gggd@gmail.com</a>
                                </div>
                                <div className="otherContacts">
                                    <div className="vk otherContacts__icon"><div/></div>
                                    <div className="tg otherContacts__icon"><div/></div>
                                    <div className="facebook otherContacts__icon"><div/></div>
                                    <div className="inst otherContacts__icon"><div/></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
           </div>
            <div className="line"></div>
            <div className="_container-1">
                <div className="subFooter darkText">
                    © 1998 – 2021 ООО СК "ДЕЛО ЖИЗНИ". Все права защищены. Полное или частичное копирование любых материалов сайта запрещено. ООО СК «ДЕЛО ЖИЗНИ» осуществляет свою деятельность на основании лицензий ЦБ РФ:СЖ № 3870 от 24.03.2017СЛ № 3870 от 24.03.2017 Органом, осуществляющим полномочия по контролю и надзору за ООО СК «ДЕЛО ЖИЗНИ» является Банк России. Адрес официального сайта Банк России - www.cbr.ru.
                </div>
            </div>
        </div>
    );
};

export default Footer;