import React from 'react';
import './styles/ActivateInfo/ActivateInfo.css'
import { useSelector } from 'react-redux';
import { selectUser } from './globalSlices/authSlice';
import userModel from '../types/UserModel';

const ActivateInfo = () => {
    type userModelFull = userModel & {
        isActivated: boolean;
    }
    const selectedUser: userModelFull = useSelector(selectUser)

    return (
        <div className='ActivateInfo'>
            <div className="ActivateInfo__wrapper">
                {!selectedUser.isActivated ?
                    <div className="info">Подтвердите свой адрес электронной почты, чтобы продолжить создание аккаунта, перейдя по ссылке отправленной на ваш Email: {selectedUser.email} .</div>
                    :
                    <div className="info">Ваша почта {selectedUser.email } была успешно подтвержденна. Вы можете закрыть эту страницу!</div>
                }
                <div className="logo"></div>
            </div>
        </div>
    );
};

export default ActivateInfo;