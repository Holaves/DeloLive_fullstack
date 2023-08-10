import React, { FC, useEffect, useState } from 'react';
import './FormInput.css'
import { useDate } from '../../../hooks/useDate'
import { selectValid, selectUserData, setIsSetPassword, setPassword, setPasswordUpdate, setUserData, selectSendCounter } from '../../globalSlices/registrationSlice';
import { useDispatch, useSelector } from 'react-redux';
import IFormInputProps from '../../../types/interfaces/IFormInputProps';
import { selectLogin, selectLoginCounter, setLoginData } from '../../globalSlices/loginSlice';

const FormInput: FC<IFormInputProps> = ({
    field,
    placeholder,
    isTel = false,
    title,
    checkPassword = false,
    errorMessage,
    validation = {
        minLength: 1,
        maxLength: 100,

    },
    isPassword = false,
    isInfo = false,
    isCard = false,
    isLogin = false,
    width = 'normal',
    indexOne = false,
    date = false,
    inputType = "text"
}) => {
    const dispatch = useDispatch()
    const selectedReg = useSelector(selectSendCounter)
    const selectedLogin = useSelector(selectLoginCounter)
    const userDateRedux = useSelector(selectUserData)
    const checkPasswordDate = useSelector(setPassword)

    const [passwordShow, setPasswordShow] = useState <boolean>(true)
    const [counterSend, setCounterSend] = useState <number>(0)
    const [isError, setIsError] = useState <boolean>(false)
    const [ErrorMsg, setErrorMsg] = useState <string>('')
    const [inputWidth, setInputWidth] = useState <number>(0)
    const [marginTop, setMarginTop] = useState <number>(0)
    const [telNum, setTelNum] = useState <string>('+7 (___) ___-__-_')
    const [inputText, setInputText] = useState <string>('')
    const [inputDate, setInputDate] = useState <string>(useDate())
    const [cardText, setCardText] = useState <string>('')

    const [sendTime, setSendTime] = useState <number>(1);
    const [intervalId, setIntervalId] = useState <any>(null);

    const passwordShowHandler = () => {
        if(passwordShow){
            setPasswordShow(false)
            return
        }
        setPasswordShow(true)
    }

    const createErrorMsg = (msg: string) => {
        setIsError(true)
        setErrorMsg(msg)
    }

    const checkValid = (): boolean => {
        let valid: boolean = false
        let currentText;

        if(date) currentText = inputDate
        else if(isTel) currentText = telNum
        else if(isCard) currentText = cardText
        else currentText = inputText
        
        if(field === 'none') return false
        if(validation.minLength <= currentText.length || isTel){
            if(validation.maxLength >= currentText.length || isTel){
                if(field !== 'birthdate' && field !== 'card' && field !== 'telephone' && field !== 'password' && field !== 'check'){
                    currentText = currentText.trim()
                    if (!/\s/g.test(currentText)){
                        setIsError(false)
                        return true
                    }
                    else{
                        createErrorMsg('Это поле не должно содержать знак пробела')
                    }
                }
                else{
                    if(isTel){
                        if(currentText[0] === '+'){
                            let newCT = currentText.substring(1)
                            let newNewCT = newCT.replace('7','8');
                            currentText = newNewCT
                        }
                        currentText = currentText.replaceAll(' ', '')
                        currentText = currentText.replaceAll('-', '')
                        currentText = currentText.replace('(', '')
                        currentText = currentText.replace(')', '')
                        
                        if(validation.minLength < currentText.length){
                            if(validation.maxLength >= currentText.length){
                                setIsError(false)
                                return true
                            }
                            else{
                                createErrorMsg('Максимальное кол-во символов для этого поля - ' + String(validation.maxLength))
                            }
                        }
                        else{
                            createErrorMsg('Минимальное кол-во символов для этого поля - ' + String(validation.minLength))
                        }
                    }
                    else if(isPassword){
                        if(!/\s/g.test(currentText) && !/-/g.test(currentText) && !/\//g.test(currentText)){
                            setIsError(false)
                            return true
                        }
                        else{
                            createErrorMsg('Пароль не должен содержать символов: "пробел" , "/" , "/"')
                        }
                    }
                    else if(checkPassword){
                        if(checkPasswordDate === inputText){
                            setIsError(false)
                            dispatch(setIsSetPassword(true))
                            return true
                        }
                        else{
                            createErrorMsg('Пароли не совпадают')
                        }
                    }
                    else if(field === 'birthdate'){
                        setIsError(false)
                        return true
                    }

                    else if(field === 'card'){
                        setIsError(false)
                        return true
                    }
                    
                }
            }
            else{
                createErrorMsg('Максимальное кол-во символов для этого поля - ' + String(validation.maxLength))
            }
        }
        else{
            if(field === 'fatherName') {
                setIsError(false)
                return true
            }
            createErrorMsg('Минимальное кол-во символов для этого поля - ' + String(validation.minLength))
        }
        return valid
    }
    const sendLogin = () => {
        let dataValue = inputText
        if(inputText.length === 0) {
            if(field === 'password') {
                createErrorMsg('Введите пароль')
            }
            else {
                createErrorMsg('Введите почту')
            }
        }
        else {
            setIsError(false)
            dispatch(setLoginData({[field]: dataValue}))
        }
    }

    const sendData = () => {
        let dataValue;

        if(date) dataValue = inputDate
        else if(isTel) dataValue = telNum
        else if(isCard) dataValue = cardText.replace(/\s/g, "");
        else dataValue = inputText
        const valid: boolean = checkValid()

        if(isTel){
            if(dataValue[0] === '+'){
                let newCT = dataValue.substring(1)
                let newNewCT = newCT.replace('7','8');
                dataValue = newNewCT
            }
            dataValue = dataValue.replaceAll(' ', '')
            dataValue = dataValue.replaceAll('-', '')
            dataValue = dataValue.replace('(', '')
            dataValue = dataValue.replace(')', '')
        }
        if(!valid){
            if(isTel) setTelNum('+7 (___) ___-__-_')
            else setInputText('')
        }

        if(field !== 'none' && valid){
            console.log('Отработало')
            dispatch(setUserData({[field]: dataValue}))
        }
    }
    let counter = 0
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue: string = e.target.value
        setInputText(inputValue)
    }
    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue: string = e.target.value
        counter = 0
        clearInterval(intervalId);

        setIntervalId(setInterval(() => {
            counter = counter + 0.5
            if (counter === sendTime) {
                dispatch(setPasswordUpdate(inputValue))
                clearInterval(intervalId);
                return
            }
        }, 500));
        setInputText(inputValue)

    }
    const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue: string = e.target.value
        setInputDate(inputValue)
    }
    const cardHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue: string = e.target.value
        let beforeValue: string = ''
        let counter = 0
        
        inputValue.replace(/\s/g, "").split('').forEach((cv) => {

            if(counter % 4 == 0) {
                beforeValue = beforeValue + ' ' + cv
            }
            else {
                beforeValue = beforeValue + cv
            }
            counter++
        })
        beforeValue = beforeValue.trim()
        if(inputValue.replace(/\s/g, "").length <= 16) {
            setCardText(beforeValue)
        }
    }
    const telNumHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue: string = e.target.value

        if(inputValue.length - 1 < 18 && Number(inputValue[inputValue.length - 1]) >= 0){
            let copyInputValue: string[] = inputValue.split('')
            copyInputValue.every((cv, i, arr) => {
                if(cv === '_') {
                    arr[i] = inputValue[inputValue.length - 1]
                    arr[inputValue.length - 1] = ''
                    return false
                }
                else return true
            })

            let newVal: string = copyInputValue.join('')
            setTelNum(newVal)
        }
        else{
            setTelNum(inputValue)
        }

    }
    const getMarginTop = () => {
        if(!indexOne){
            if(isError){
                setMarginTop(29)
            }
            else{
                setMarginTop(53)
            }
        }
    }
    const getInputType = () => {
        if(isPassword){
            if(passwordShow) return 'password'
            else return inputType
        }
        else if(date) return 'date'
        else return inputType
    }
    
    const getInputValue = () => {
        if(isTel) return telNum
        else if(isCard) return cardText
        else if(date) return inputDate
        else return inputText
    }
    const getWidth = () => {
        if(inputWidth === 0){
            let decrementWidth = 0
            if(isPassword){
                decrementWidth = 20
            }
            switch(width){
                case 'normal':
                    setInputWidth(265 - decrementWidth)
                    break
                case 'small':
                    setInputWidth(165 - decrementWidth)
                    break
                case 'large':
                    setInputWidth(365 - decrementWidth)
                    break
            }
        }
    }

    useEffect(() => {
        getWidth()
        getMarginTop()
    }, [])
    useEffect(() => {
        if(counterSend !== 0) {
            if(isLogin) {
                sendLogin()
            }
            else {
                sendData()
            }
        }
        setCounterSend(1)
    }, [selectedReg, selectedLogin])
    return (
        <div className='FormInput' style={{marginTop: marginTop}}   >
            <div className="FormInput__title">{title}</div>
            <div 
            style={{display: isPassword ? 'flex' : 'block', alignItems: 'center', maxWidth: inputWidth + 30}}
            className={isError ? 'FormInput__bar_error' : 'FormInput__bar'}>
                <input
                style={{width: inputWidth}}
                type={getInputType()}
                onChange={isTel ? telNumHandler : date ? dateHandler : isPassword ? passwordHandler : isCard ? cardHandler: inputHandler}
                value={getInputValue()}
                autoComplete='new-password'
                className='FormInput_input'
                placeholder={isTel ? '+7(___)__-__-__' : placeholder}
                />
                {
                    isPassword ? 
                    <div
                    className={passwordShow ? 'password_show' : 'password_hide'}
                    onClick={passwordShowHandler}
                    ></div>
                    :
                    <div></div>
                }
                {
                    isInfo ?
                    <div className='info'></div>
                    :
                    <div></div>
                }
            </div>
            {
                isError ?
                errorMessage
                    ? 
                        <div className='FormInput__errorMessage' style={{maxWidth: inputWidth}}>{errorMessage}</div>
                    :
                        <div className='FormInput__errorMessage' style={{maxWidth: inputWidth}}>{ErrorMsg}</div>
                :
                <div></div>
            }
        </div>
    );
};

export default FormInput;