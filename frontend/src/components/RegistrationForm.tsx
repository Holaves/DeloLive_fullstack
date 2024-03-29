import React, { useEffect, useState } from 'react';
import './styles/RegistrationForm/RegistrationForm.css'
import { Col, Row } from 'react-bootstrap';
import FormInput from './UI/FormInput/FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { isSetPassword, validate, selectReg, selectUserData, registrate, setSendCounter, setUserData } from './globalSlices/registrationSlice';
import { registration, selectIsAuth, selectIsEmailSend, selectIsLoading, selectIsLoadingForm, selectRegistrationError, setRegistrationError } from './globalSlices/authSlice';
import userModel from '../types/UserModel';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store/store';
import Loader from './UI/Loader/Loader';
import { Link, useNavigate } from 'react-router-dom';


const RegistrationForm = () => {
    type AppDispatch = ThunkDispatch<RootState, void, any>;

    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const errorMessage = useSelector(selectRegistrationError)
    const isReg = useSelector(selectReg)
    const isMail = useSelector(selectIsEmailSend)
    const allData: userModel = useSelector(selectUserData)
    const isCheckPassword = useSelector(isSetPassword)
    const isLoadingForm = useSelector(selectIsLoadingForm)
    const isLoading = useSelector(selectIsLoading)
    const isAuth = useSelector(selectIsAuth)

    const [redirectCounter, setRedirectCounter] = useState <number>(0)
    const [isChecked1, setIsChecked1] = useState <boolean>(false)
    const [isChecked2, setIsChecked2] = useState <boolean>(false)
    const [isSubmitDisabled, setIsSubmitDisabled] = useState <boolean>(false)

    const isChecked1Handler = () => {
        isChecked1 ? setIsChecked1(false) : setIsChecked1(true)
        dispatch(setUserData({['isMailing']: !isChecked1}))
    }
    const isChecked2Handler = () => {
        isChecked2 ? setIsChecked2(false) : setIsChecked2(true)
    }
    function areAllFieldsFilled(obj: object) {
        for (var key in obj) {
        // @ts-ignore
        if(typeof obj[key] !== 'boolean') {
            // @ts-ignore
            if (obj[key].trim() === '' || typeof obj[key] !== 'string') {
                return false;
            }
        }
          
        }
        return true;
    }
    const sendALLData = () => {
        console.log(allData)

        if(areAllFieldsFilled(allData) && isCheckPassword){
            console.log(allData)
            console.log('sendDate')
            dispatch(registration(allData));
        }
        else{
            console.log('areAllFieldsFilled - ' + areAllFieldsFilled(allData))
            console.log('checkPassword - ' + isCheckPassword)
        }
    }
    const isRegSet = () => {
        if(!isChecked2) {
            dispatch(setRegistrationError('Для продолжения требуется согласие на обработку данных'))   
        }
        else {
            console.log('valid')
            dispatch(validate());
            dispatch(setSendCounter())

            setIsSubmitDisabled(true)

            setTimeout(() => {
                dispatch(registrate())
                setIsSubmitDisabled(false)
            }, 3000)
        }
    }
    useEffect(() => {
        sendALLData()
    }, [isReg])

    useEffect(() => {
        if(redirectCounter !== 0) {
            navigate('/registration/activate');
        }
        setRedirectCounter(1)
    },[isMail])

    if(isLoading) {
        return(
            <div style={{display:'flex', justifyContent: 'center', marginTop: 100}}>
                <Loader width={100} height={100}></Loader>
            </div>
        )
    }

    return (
        <div className='RegistrationForm' style={{marginTop: '73px'}}>
            <h1 onClick={() => navigate('/registration/activate')}>{isAuth ? 'Ауз' : 'Не ауз'}</h1>
            <form className="RegistrationForm__wrapper">
                <Row>
                    <Col className='align-center-style'>
                        <FormInput
                        field='surname'
                        indexOne = {true}
                        placeholder='Иванов'
                        title='Фамилия*'
                        />
                        <FormInput
                        field='name'
                        placeholder='Иван'
                        title='Имя*'
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
                        title='Телефон*'
                        isTel={true}
                        />
                        <FormInput
                        field='email'
                        placeholder='mail@example.ru'
                        title='E-mail*'
                        validation={{
                            minLength: 6,
                            maxLength: 100,
                            email: true
                        }}
                        />
                        <FormInput
                        field='password'
                        placeholder='Придумайте пароль'
                        title='Пароль*'
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
                        title='Подтверждение пароля*'
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
                        title='Дата рождения*'
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
                        isCard={true}
                        placeholder='1111 1111 1111 1111'
                        title='Номер карты клиента*'
                        isInfo={true}
                        width={'small'}
                        />
                    </Col>
                </Row>
                {
                    !isLoadingForm ?
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
                                {errorMessage ? <h4 className="Error-message">{errorMessage}</h4> : ''}
                                <input
                                type="submit"
                                disabled={isSubmitDisabled}
                                className='submitButton'
                                value="Зарегестрироваться"
                                onClick={isRegSet}
                                />
                                <Link className="loginLink" to='/login' >
                                    Войти
                                </Link>
                            </div>
                            
                        </div>
                    :
                    <div style={{display:'flex', justifyContent: 'center', marginTop: 50}}>
                        <Loader width={60} height={60}></Loader>
                    </div>
                }
                
            </form>
        </div>
    );
};

export default RegistrationForm;