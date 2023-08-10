import React, { FC } from 'react';
import './styles/LoginReasons/LoginReasons.css'


const LoginReasons: FC = () => {
    return (
        <div className='LoginReasons'>
            <div className="LoginReasons__head">причин зарегис   трироваться</div>
            <div className="reasons">
                {/* 1 */}
                <div className="reasons__reason-item">
                    <div className="icon-container">
                        <div className="reasons__reason-item__icon" id='icon1'></div>
                    </div>
                    <div className="reasons__reason-item__text">быстрые и удобные правки</div>
                </div>
                {/* 2 */}
                <div className="reasons__reason-item">
                    <div className="icon-container">
                        <div className="reasons__reason-item__icon" id='icon2'></div>
                    </div>
                    <div className="reasons__reason-item__text">надежность</div>
                </div>
                {/* 3 */}
                <div className="reasons__reason-item">
                    <div className="icon-container">
                        <div className="reasons__reason-item__icon" id='icon3'></div>
                    </div>
                    <div className="reasons__reason-item__text">приватность</div>
                </div>
                {/* 4 */}
                <div className="reasons__reason-item">
                    <div className="icon-container">
                        <div className="reasons__reason-item__icon" id='icon4'></div>
                    </div>
                    <div className="reasons__reason-item__text">все документы в одном месте</div>
                </div>
                {/* 5 */}
                <div className="reasons__reason-item">
                    <div className="icon-container">
                        <div className="reasons__reason-item__icon" id='icon5'></div>
                    </div>
                    <div className="reasons__reason-item__text">индивидувльный подход</div>
                </div>
            </div>
        </div>
    );
};

export default LoginReasons;