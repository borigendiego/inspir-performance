import { useState, useEffect, useRef } from 'react';

const useCustomForm = ({initialValues,fields, onSubmit}) => {
    const [values, setValues] = useState(initialValues || {});
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const formRendered = useRef(true);

    useEffect(() => {
        if (formRendered.current) {
            setValues(initialValues);
            setErrors({});
            setTouched({});
        }
        formRendered.current = false;
    }, [initialValues]);

    const handleChange = (event, validations) => {
        const { target } = event;
        const { name, value } = target;

        event.persist();

        if (touched && validations) {
            validations.forEach(validation => setErrors({...errors, [name]: validation(value)}));
        }
        setValues({ ...values, [name]: value });
    };

    const handleBlur = (event) => {
        const { target } = event;
        const { name } = target;

        setTouched({ ...touched, [name]: true });
    };

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        let newErrors = {};

        fields.forEach(field => {
            if (field.validations) {
                field.validations.forEach(validation => newErrors[field.name] = validation(values[field.name]));
                setErrors({...errors, ...newErrors});
                console.log('>>errors1', newErrors);
            }
        });
        console.log('>>errors', newErrors);
        newErrors = Object.keys(newErrors).forEach(key => {
            //TODO: Seguir desde aca
            console.log('>>key', key);
                return newErrors[key] === undefined ? delete newErrors[key] : {}
            });

        console.log('>>newerrors', newErrors);
        if (!newErrors) {
            onSubmit(event.target);
        }
    };

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setErrors,
        setValues,
        setTouched,
    };
};

export default useCustomForm;