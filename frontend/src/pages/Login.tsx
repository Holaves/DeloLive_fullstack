import React, { FC } from 'react';
import LoginReasons from '../components/LoginReasons';
import LoginForm from '../components/LoginForm';
import login_container_Styles from '../components/styles/customStyles/loginContainer';

const Login = () => {
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