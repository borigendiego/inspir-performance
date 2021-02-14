import React, { useState } from 'react';
import emailjs from 'emailjs-com';
//Hook
import useContactForm from './useContactForm';
//Component
import MyInput from './CustomInput';
//Styles
import './customForm.scss';

const MyCustomForm = ({ fields }) => {
    const [messageSent, setMessageSent] = useState('');
    const initialValues = {
        name: '',
        mail: '',
        subject: '',
        message: '',
    };

    const {
        values,
        handleChange,
        errors,
        setErrors,
        setValues,
        handleSubmit,
    } = useContactForm({
        initialValues,
        fields,
        onSubmit: (form) => {
            console.log('>>form', form);
            if (!errors && (Object.keys(errors).length === 0 && errors.constructor === Object)) {
                console.log('>>33');
                //TODO: Move emails sender to a proper API
                emailjs.sendForm(process.env.REACT_APP_MAIL_VALUE, process.env.REACT_APP_TEMPLATE_ID, form, process.env.REACT_APP_USER_ID)
                    .then(() => {
                        setValues(initialValues);
                        setMessageSent('succeed');
                    }, (error) => {
                        console.log(error.text);
                        setMessageSent('error');
                    });
            }
        }
    });

    /*const onSubmit = (e, form) => {
        console.log('>>errors', errors );
        const cleanedErrors = Object.keys(errors).forEach(key => errors[key] === undefined ? delete errors[key] : {});
        console.log('>>cleanedErrors', cleanedErrors);
        if (!errors && (Object.keys(errors).length === 0 && errors.constructor === Object)) {
            console.log('>>33');
            //TODO: Move emails sender to a proper API
            emailjs.sendForm(process.env.REACT_APP_MAIL_VALUE, process.env.REACT_APP_TEMPLATE_ID, form, process.env.REACT_APP_USER_ID)
                .then(() => {
                    setValues(initialValues);
                    setMessageSent('succeed');
                }, (error) => {
                    console.log(error.text);
                    setMessageSent('error');
                });
        }
    };*/

    /*const handleSubmit = (event) => {
        if (event) event.preventDefault();
        let newErrors = {};

        for (const [index, [key, value]] of Object.entries(Object.entries(values))) {
            if (!value && fields[index].validations) {
                //fields[index].validations.forEach(validation => newErrors[key] = validation(value));
                fields[index].validations.forEach(validation => {
                        newErrors = {...newErrors, [key]: validation(value)}
                });
            }
        }
        setErrors(newErrors);

        onSubmit({ values }, event.target);
    };*/

    const renderSentMessage = () => {
        if (messageSent === 'succeed') {
            return <div className={'message succeed'}>
                <h2>Thank you!</h2>
                <p>Your message has been successfully sent. We will contact you very soon!</p>
            </div>
        }
        if (messageSent === 'error') {
            return <div className={'message error'}>
                <h2>Something went wrong</h2>
                <p>Please try again or send and email to: support@mbanalyst.com</p>
            </div>
        }
        return null;
    };

    return (
        <form className={'contact-form'} onSubmit={(event) => handleSubmit(event)}>
            {
             fields.map((field) => {
                 const { name, type, label, validations, selectOptions } = field;

                 switch (type) {
                     case 'text':
                         return (
                             <MyInput
                                 key={name}
                                 fieldName={name}
                                 id={name}
                                 fieldType={'text'}
                                 label={label}
                                 handleChange={handleChange}
                                 value={values[name]}
                                 validations={validations}
                                 errors={errors}
                             />
                         );
                     case 'textArea':
                         return (
                             <section className={'contact-item'} key={name}>
                                 <label className={'contact-label'}>{label}</label>
                                 <textarea
                                     name={name}
                                     id={name}
                                     onChange={handleChange}
                                     value={values[name]}
                                     rows={'5'}
                                     cols={'40'}
                                     className={'contact-input-box'}
                                 />
                             </section>
                         );
                     case 'select':
                         return (
                             <select key={name} className={'contact-select'}>
                                 {
                                     selectOptions.map(option => <option value={option.value}>{option.label}</option>)
                                 }
                             </select>
                         );
                     default:
                         return (
                         <MyInput
                             key={name}
                             fieldName={name}
                             id={name}
                             fieldType={'text'}
                             label={label}
                             handleChange={handleChange}
                             value={values[name]}
                             validations={validations}
                             errors={errors}
                         />
                     )
                 }
             })
            }
            {renderSentMessage()}
            <section className={'contact-item'}>
                <input type={'submit'} value={'SEND'} className={'contact-input-button'}/>
            </section>
        </form>
    )
};

export default MyCustomForm