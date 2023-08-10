import React, { FC } from 'react';
import LoginReasons from '../components/LoginReasons';
import LoginForm from '../components/LoginForm';

const Login = () => {
    const login_container_Styles = {
        'display': 'flex',
        'marginTop' : '65px',
        'justifyContent': 'space-around'

    }

    return (
        <div>
            <div className='_container-1'>
                <div className="login_container" style={login_container_Styles}>
                    <LoginForm/>
                    <LoginReasons/>
                </div>
            </div>
        </div>
    );
};

export default Login;