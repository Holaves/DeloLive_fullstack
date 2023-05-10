import React, { FC, useEffect, useState } from 'react';
import ValidationType from '../../../types/Validation';
import './FormInput.css'
import { useDate } from '../../../hooks/useDate'
interface FormInputProps{
    placeholder: string;
    title: string;
    errorMessage?: string;
    isPassword?: boolean;
    isInfo?: boolean;
    isTel?: boolean;
    validation?: ValidationType;
    date?: boolean;
    width?: 'normal' | 'small' | 'large';
    indexOne?: true;
    inputType?: string;
}

const FormInput: FC<FormInputProps> = ({
    placeholder,
    isTel = false,
    title,
    errorMessage,
    isPassword = false,
    isInfo = false,
    width = 'normal',
    indexOne = false,
    date = false,
    inputType = "text"
}) => {
    const [passwordShow, setPasswordShow] = useState <boolean>(true)
    const [isError, setIsError] = useState <boolean>(false)
    const [inputWidth, setInputWidth] = useState <number>(0)
    const [marginTop, setMarginTop] = useState <number>(0)
    const [telNum, setTelNum] = useState <string>('+7 (___) ___-__-_')
    const [inputText, setInputText] = useState <string>('')
    const [inputDate, setInputDate] = useState <string>(useDate())

    const passwordShowHandler = () => {
        if(passwordShow){
            setPasswordShow(false)
            return
        }
        setPasswordShow(true)
    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue: string = e.target.value
        setInputText(inputValue)
    }
    const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue: string = e.target.value
        console.log(inputValue)
        setInputDate(inputValue)
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
    return (
        <div className='FormInput' style={{marginTop: marginTop}}   >
            <div className="FormInput__title">{title}</div>
            <div 
            style={{display: isPassword ? 'flex' : 'block', alignItems: 'center'}}
            className={isError ? 'FormInput__bar_error' : 'FormInput__bar'}>
                <input
                style={{width: inputWidth}}
                type={getInputType()}
                onChange={isTel ? telNumHandler : date ? dateHandler : inputHandler}
                value={getInputValue()}
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
                        <div className='FormInput__errorMessage'>{errorMessage}</div>
                    :
                        <div className='FormInput__errorMessage'>{'Введите' + title.toLowerCase}</div>
                :
                <div></div>
            }
        </div>
    );
};

export default FormInput;