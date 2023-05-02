import React, { FC, useState } from 'react';

interface FormInputProps{
    placeholder: string;
    title: string;
    errorMessage?: string;
    isPassword?: boolean;
    isInfo?: boolean;
}

const FormInput: FC<FormInputProps> = ({placeholder, title, errorMessage, isPassword = false, isInfo = false}) => {
    const [passwordShow, setPasswordShow] = useState <boolean>(false)
    const [isError, setIsError] = useState <boolean>(false)

    const passwordShowHandler = () => {
        if(passwordShow){
            setPasswordShow(false)
            return
        }
        setPasswordShow(true)
    }
    return (
        <div className='FormInput'>
            <div className="FormInput__title">{title}</div>
            <div className={isError ? 'FormInput__bar_error' : 'FormInput__bar'}>
                <input
                type="text" 
                placeholder={placeholder}
                />
                {
                    isPassword ? 
                    <div className={passwordShow ? 'password_show' : 'password_hide'}
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