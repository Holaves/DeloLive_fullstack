import React, { FC, useEffect, useState } from 'react';
import './styles/LoginForm/LoginForm.css'
import Title from './UI/Title/Title';
import FormInput from './UI/FormInput/FormInput';
import { Link } from 'react-router-dom';
import { logined, selectLogin, selectLoginData, setLoginCounter } from './globalSlices/loginSlice';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import LoginModel from '../types/LoginModel';
import { login, selectIsLoading, selectIsLoadingForm, selectLoginError } from './globalSlices/authSlice';
import Loader from './UI/Loader/Loader';


const LoginForm: FC = () => {
    type AppDispatch = ThunkDispatch<RootState, void, any>;
    const dispatch: AppDispatch = useDispatch();

    const allData: LoginModel = useSelector(selectLoginData)
    const selectedLogin = useSelector(selectLogin)
    const isLoading = useSelector(selectIsLoading)
    const errorMessage = useSelector(selectLoginError)
    const isLoadingForm = useSelector(selectIsLoadingForm)


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
        console.log(allData)
        if(areAllFieldsFilled(allData)){
            console.log(allData)
            console.log('sendDate')
            dispatch(login(allData.email, allData.password));
            console.log('sendAllDataLogin')
        }
        else{
            console.log('areAllFieldsFilled - ' + areAllFieldsFilled(allData))
        }
    }

    const [isSubmitDisabled, setIsSubmitDisabled] = useState <boolean>(false)

    const isLoginSet = () => {
        dispatch(setLoginCounter())

        setIsSubmitDisabled(true)

        setTimeout(() => {
            dispatch(logined())
            setIsSubmitDisabled(false)
        }, 3000)

    }

    useEffect(() => {
        sendALLData()
    }, [selectedLogin])

    if(isLoading) {
        return(
            <div style={{display:'flex', justifyContent: 'center', marginTop: 100}}>
                <Loader width={100} height={100}></Loader>
            </div>
        )
    }


    return (
        <div className='LoginForm'>
            <h3 className='LoginForm__title'>Добрый день!</h3>
            <form className="LoginForm__wrapper">
                <div className="LoginForm__wrapper__form">
                    <div className="LoginForm__form__inputs">
                        <FormInput
                        title='Логин'
                        placeholder='Введите свой email'
                        isLogin={true}
                        field='email'
                        width={'large'}
                        />
                        <FormInput
                        title='Пароль'
                        isPassword={true}
                        isLogin={true}
                        placeholder='Введите пароль'
                        field='password'
                        width={'large'}

                        />
                    </div>
                    {errorMessage ? <h4 className="Error-message">{errorMessage}</h4> : ''}
                    <div className="submitContainer">
                        {!isLoadingForm ?
                        <input
                            type="submit"
                            className='submitButton'
                            disabled={isSubmitDisabled}
                            onClick={isLoginSet}
                            value="Войти"
                        />
                        :
                        <div style={{display:'flex', justifyContent: 'center', marginTop: '50px'}}>
                            <Loader width={60} height={60}></Loader>
                        </div>
                        }
                        <Link className="registrationLink" to='/registration' >
                            Зарегистрироваться
                        </Link>
                    </div>
                
                </div>
            </form>
            
        </div>
    )
};

export default LoginForm;