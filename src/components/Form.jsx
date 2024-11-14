import { useState, useEffect } from 'react';
import Email from '../assets/images/email.png'
import emailjs from '@emailjs/browser';
import dotenv from 'dotenv'

export default function Form() {
    const public_key = import.meta.env.VITE_PUBLIC_KEY;
    const service_id = import.meta.env.VITE_SERVICE;
    const template_id = import.meta.env.VITE_TEMPLATE;

    useEffect(() => { emailjs.init(public_key);});

    const [values, setValues] = useState({'email': ''});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues ({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail: ${values.email}`);
            setValues({'email': ''});

            const templateParams = { to_email: values.email }; 
            
            emailjs.send(service_id, template_id, templateParams, public_key).then((response) => { 
                console.log('E-mail enviado com sucesso!', response.status, response.text); 
            }, (error) => { 
                console.error('Erro ao enviar e-mail:', error); 
            });
        };
    };

    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Este campo é obrigatório';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'E-mail inválido';
        }
        return errors;
    }


    return (
        <>
            <form>
                <div>
                    <label htmlFor="email">
                        <img style={{width: '20px'}} src={Email} alt="icone email" />
                    </label>
                    <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="Insira seu e-mail"/>
                    {errors.email && <p className="error">{errors.email}</p>}
                    <button type="submit" onClick={handleSubmit}>Assinar Newsletter</button>
                </div>
            </form>
        </>
    );
}