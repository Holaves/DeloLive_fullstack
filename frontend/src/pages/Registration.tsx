import React from 'react';
import RegistrationForm from '../components/RegistrationForm';

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