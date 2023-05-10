import React, { useState } from 'react';
import './styles/RegistrationForm/RegistrationForm.css'
import { Col, Row } from 'react-bootstrap';
import FormInput from './UI/FormInput/FormInput';


const RegistrationForm = () => {
    const [isChecked1, setIsChecked1] = useState <boolean>(true)
    const [isChecked2, setIsChecked2] = useState <boolean>(true)

    const isChecked1Handler = () => {
        isChecked1 ? setIsChecked1(false) : setIsChecked1(true)
    }
    const isChecked2Handler = () => {
        isChecked2 ? setIsChecked2(false) : setIsChecked2(true)
    }
    return (
        <div className='RegistrationForm' style={{marginTop: '73px'}}>
            <div className="RegistrationForm__wrapper">
                <Row>
                    <Col className='align-center-style'>
                        <FormInput
                        indexOne = {true}
                        placeholder='Иванов'
                        title='Фамилия'
                        />
                        <FormInput
                        placeholder='Иван'
                        title='Имя'
                        />
                        <FormInput
                        placeholder='Иванович'
                        title='Отчество'
                        />
                    </Col>
                    <Col className='align-center-style'>
                        <FormInput
                        indexOne = {true}
                        placeholder=''
                        title='Телефон'
                        isTel={true}
                        />
                        <FormInput
                        placeholder='mail@example.ru'
                        title='E-mail'
                        validation={{
                            minLength: 6,
                            email: true
                        }}
                        />
                        <FormInput
                        placeholder='Придумайте пароль'
                        title='Пароль'
                        isPassword={true}
                        validation={{
                            minLength: 5
                        }}
                        />
                        <FormInput
                        inputType='password'
                        placeholder='Повторите пароль'
                        title='Подтверждение пароля'
                        errorMessage='Пароли не совпадают, попробуйте
                        ввести еще раз'
                        />
                    </Col>
                    <Col className='align-center-style'>
                        <div className='dop-info'>
                            На указанные контактные данные придет код для подтверждения регистрации
                        </div>
                        <FormInput
                        placeholder='ДД.ММ.ГГГГ'
                        title='Дата рождения'
                        errorMessage='Введите дату рождения'
                        width={'small'}
                        date={true}
                        validation={{
                            birthday: true
                        }}
                        />
                        <FormInput
                        placeholder='123456'
                        title='Номер карты клиента'
                        errorMessage='Укажите (если имеется) последние шесть цифр'
                        isInfo={true}
                        width={'small'}
                        />
                    </Col>
                </Row>
                <div className="submitForm-container">
                    <div className="submitForm">
                        <div className="smsSystem">
                            <h6>Подписка на рассылку</h6>
                            <input type='checkbox' name='sms' checked={isChecked1}/>
                            <label htmlFor="sms" onClick={isChecked1Handler}></label>
                        </div>
                        <div className="personalDate">
                            <h5>Согласие на обработку перональных данных </h5>
                            <input type='checkbox' name='data' checked={isChecked2}/>    
                            <label htmlFor="sms" onClick={isChecked2Handler}></label>
                        </div>
                        <input type="submit" className='submitButton' value="Зарегестрироваться"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;