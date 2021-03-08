import React from 'react';
//Styles
import './form.scss';
//Fields validations
import { required, email } from './fieldValidations';
//Form hook
import MyForm from './myCustomForm';

const Form = () => {
    return(
        <div className={'form-section'} id={'contact'}>
            <h2 className={'contact-title'}>CONTACT US</h2>
            <MyForm
                fields={[
                    {
                        name: 'name',
                        type: 'text',
                        label: 'Name (Required)',
                        validations: [required],
                    },
                    {
                        name: 'mail',
                        type: 'text',
                        label: 'Email (Required)',
                        validations: [email],
                    },
                    {
                        name: 'subject',
                        type: 'text',
                        label: 'Subject',
                    },
                    {
                        name: 'Message',
                        type: 'textArea',
                        label: 'Message',
                    }
                ]}
                onSuccessMessage={'Your message has been successfully sent. We will contact you very soon!'}
                onErrorMessage={'Please try again or send and email to: bregnier@inspirperformance.com'}
            />
        </div>
    )
};

export default Form