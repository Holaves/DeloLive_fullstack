import React from 'react';
import h3Styles from '../components/styles/customStyles/h3Styles';
import ActivateInfo from '../components/ActivateInfo';

const MailActivate = () => {
    return (
        <div>
            <h3 style={h3Styles}>Подтверждение Email</h3>
            <ActivateInfo/>
        </div>
    );
};

export default MailActivate;