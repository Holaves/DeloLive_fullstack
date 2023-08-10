import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import { useSelector } from 'react-redux';
import { selectUser } from '../components/globalSlices/authSlice';
import { IUser } from '../types/interfaces/IUser';

const Registration = () => {

    const h3Styles = {
        'fontFamily': 'SF Pro Display',
        'fontWeight': 400,
        'fontSize': '30px',
        'lineHeight': '36px',
        'color': '#0D1C41',
        'marginTop': '72px',
        'text-align': 'center'
    }
    const user: IUser = useSelector(selectUser)

    return (
        <div>
            <div className="_container-1">
                <h3 style={h3Styles}>Регистрация</h3>
                <RegistrationForm/>
                
            </div>
        </div>
    );
};

export default Registration;