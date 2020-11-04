import React from 'react';
import './form.scss'

const Form = () => {
    return(
        <div className={'form-section'} id={'contact'}>
                <h1 className={'contact-title'}>CONTACT US</h1>
                <form className={'contact-form'}>
                    <section className={'contact-item'}>
                        <label className={'contact-label'}>YOUR NAME (required)</label>
                        <input type={'text'} name={'name'} id={'name'} className={'contact-input'}/>
                    </section>
                    <section className={'contact-item'}>
                        <label className={'contact-label'}>YOUR MAIL (required)</label>
                        <input type={'text'} name={'mail'} id={'mail'} className={'contact-input'}/>
                    </section>
                    <section className={'contact-item'}>
                        <label className={'contact-label'}>YOUR PHONE (required)</label>
                        <input type={'text'} name={'mail'} id={'mail'} className={'contact-input'}/>
                    </section>
                    <section className={'contact-item'}>
                        <label for={'howdo'} className={'contact-label'}>HOW DO YOU PREFER TO BE CONTACTED?</label>
                        <select className={'contact-input'} id={'howdo'}>
                            <option value={'Email'}>Email</option>
                            <option value={'Phone'}>Phone</option>
                        </select>
                    </section>
                    <section className={'contact-item'}>
                        <label className={'contact-label'}>SUBJECT</label>
                        <input type={'text'} name={'subject'} id={'subject'} className={'contact-input'}/>
                    </section>
                    <section className={'contact-item'}>
                        <label className={'contact-label'}>YOUR MESSAGE</label>
                        <textarea id={'message'} name={'message'} rows={'5'} cols={'40'} className={'contact-input-box'}/>
                    </section>
                    <section className={'contact-item'}>
                        <input type={'submit'} value={'SEND'} className={'contact-input-button'}/>
                    </section>
                </form>
        </div>
    )
};

export default Form