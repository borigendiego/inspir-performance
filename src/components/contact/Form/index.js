import React from 'react';
import './form.scss';
import { FORM_INPUTS } from '../../common/constants';


const Form = () => {
    return(
        <div className={'form-section'} id={'contact'}>
            <h1 className={'contact-title'}>CONTACT US</h1>
            <form className={'contact-form'}>
                {
                    FORM_INPUTS.map((input, index) =>
                        (
                            <section className={'contact-item'} key={index}>
                                <label className={'contact-label'}>{input.labelName}</label>
                                <input type={input.type} name={input.id} id={input.id} className={'contact-input'}/>
                            </section>
                        )
                    )
                }
                <section className={'contact-item'}>
                    <label className={'contact-label'}>HOW DO YOU PREFER TO BE CONTACTED?</label>
                    <select className={'contact-select'}>
                        <option value={'Email'}>Email</option>
                        <option value={'Phone'}>Phone</option>
                    </select>
                </section>
                <section className={'contact-item'}>
                    <label className={'contact-label'}>YOUR MESSAGE</label>
                    <textarea id={'message'} name={'message'} rows={'5'} cols={'45'} className={'contact-input-box'}/>
                </section>
                <section className={'contact-item'}>
                    <input type={'submit'} value={'SEND'} className={'contact-input-button'}/>
                </section>
            </form>
        </div>
    )
};

export default Form