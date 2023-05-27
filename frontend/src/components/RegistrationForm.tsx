import React, { useEffect, useState } from 'react';
import './styles/RegistrationForm/RegistrationForm.css'
import { Col, Row } from 'react-bootstrap';
import FormInput from './UI/FormInput/FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { isSetPassword, validate, selectReg, selectUserData, registrate } from './globalSlices/registrationSlice';
import axiosRequests from '../classes/axiosRequests';


const RegistrationForm = () => {
    const dispatch = useDispatch()
    const isReg = useSelector(selectReg)
    const allData = useSelector(selectUserData)
    const isCheckPassword = useSelector(isSetPassword)

    const [isChecked1, setIsChecked1] = useState <boolean>(true)
    const [isChecked2, setIsChecked2] = useState <boolean>(true)
    const [isSubmitDisabled, setIsSubmitDisabled] = useState <boolean>(false)

    const isChecked1Handler = () => {
        isChecked1 ? setIsChecked1(false) : setIsChecked1(true)
    }
    const isChecked2Handler = () => {
        isChecked2 ? setIsChecked2(false) : setIsChecked2(true)
    }
    function areAllFieldsFilled(obj: object) {
        for (var key in obj) {
        // @ts-ignore
          if (typeof obj[key] !== 'string' || obj[key].trim() === '') {
            return false;
          }
        }
        return true;
    }
    const sendALLData = () => {
        if(areAllFieldsFilled(allData) && isCheckPassword){
            console.log('sendDate')
            axiosRequests.POSTuser('/api/registration', allData)
        }
        else{
            console.log('areAllFieldsFilled - ' + areAllFieldsFilled(allData))
            console.log('checkPassword - ' + isCheckPassword)
        }
    }
    const isRegSet = () => {
        console.log('valid')
        dispatch(validate());

        setIsSubmitDisabled(true)

        setTimeout(() => {
            dispatch(registrate())
            setIsSubmitDisabled(false)
        }, 3000)

    }
    useEffect(() => {
        sendALLData()
    }, [isReg])
    return (
        <div className='RegistrationForm' style={{marginTop: '73px'}}>
            <form className="RegistrationForm__wrapper">
                <Row>
                    <Col className='align-center-style'>
                        <FormInput
                        field='surname'
                        indexOne = {true}
                        placeholder='Иванов'
                        title='Фамилия'
                        />
                        <FormInput
                        field='name'
                        placeholder='Иван'
                        title='Имя'
                        />
                        <FormInput
                        field='fatherName'
                        placeholder='Иванович'
                        title='Отчество'
                        />
                    </Col>
                    <Col className='align-center-style'>
                        <FormInput
                        indexOne = {true}
                        placeholder=''
                        field='telephone'
                        title='Телефон'
                        isTel={true}
                        />
                        <FormInput
                        field='email'
                        placeholder='mail@example.ru'
                        title='E-mail'
                        validation={{
                            minLength: 6,
                            maxLength: 100,
                            email: true
                        }}
                        />
                        <FormInput
                        field='password'
                        placeholder='Придумайте пароль'
                        title='Пароль'
                        isPassword={true}
                        validation={{
                            password: true,
                            minLength: 5,
                            maxLength: 50
                        }}
                        />
                        <FormInput
                        field='check'
                        inputType='password'
                        placeholder='Повторите пароль'
                        checkPassword = {true}
                        title='Подтверждение пароля'
                        validation={{
                            minLength: 5,
                            maxLength: 50
                        }}
                        />
                    </Col>
                    <Col className='align-center-style'>
                        <div className='dop-info'>
                            На указанные контактные данные придет код для подтверждения регистрации
                        </div>
                        <FormInput
                        field='birthdate'
                        placeholder='ДД.ММ.ГГГГ'
                        title='Дата рождения'
                        errorMessage='Введите дату рождения'
                        width={'small'}
                        date={true}
                        validation={{
                            minLength: 0,
                            maxLength: 100,
                            birthday: true
                        }}
                        />
                        <FormInput
                        field='card'
                        placeholder='123456'
                        title='Номер карты клиента'
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
                        <input
                        type="submit"
                        disabled={isSubmitDisabled}
                        className='submitButton'
                        value="Зарегестрироваться"
                        onClick={isRegSet}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;