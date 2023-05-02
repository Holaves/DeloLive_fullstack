import React from 'react';
import './styles/RegistrationForm/RegistrationForm.css'
import { Col, Row } from 'react-bootstrap';
import FormInput from './UI/FormInput/FormInput';

const RegistrationForm = () => {
    return (
        <div className='RegistrationForm'>
            <div className="RegistrationForm__wrapper">
                <Row>
                    <Col>
                        <FormInput/>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </div>
        </div>
    );
};

export default RegistrationForm;