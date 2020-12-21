import React from 'react';
import logo from '../../assets/images/logo.png';
import Form from './Form';
import './contact.scss';

const Contact = () => {
    return(
        <div className={'contact-section'}>
            <Form />
            <div className={'contact-overlay'} />
            <div className={'contact-content'}>
                <img src={logo} alt={'logo'} className={'contact-logo'}/>
                <p className={'contact-info-item country'}>PARIS | MELBOURNE</p>
                <p className={'contact-info-item'}>+33 0436 346 478 | +61 0436 346 478</p>
                <p className={'contact-info-item'}>bregnier@inspirperformance.com</p>
            </div>
        </div>
    )
};

export default Contact