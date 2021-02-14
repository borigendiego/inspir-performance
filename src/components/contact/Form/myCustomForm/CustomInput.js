import React from 'react';

const CustomInput = (props) => {
    const { fieldName, fieldType, label, handleChange, value, validations, errors } = props;

    return (
        <section className={'contact-item'}>
            <label className={'contact-label'}>{label}</label>
            <input
                type={fieldType}
                name={fieldName}
                id={fieldName}
                className={errors && errors[fieldName] ? 'contact-input error' : 'contact-input'}
                onChange={(event) => handleChange(event, validations)}
                value={value}
            />
            <span className={'error-message'}>{errors ? errors[fieldName] : null}</span>
        </section>
    )
};

export default CustomInput