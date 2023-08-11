import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import { useSelector } from 'react-redux';
import { selectUser } from '../components/globalSlices/authSlice';
import { IUser } from '../types/interfaces/IUser';
import h3Styles from '../components/styles/customStyles/h3Styles';

const Registration = () => {
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