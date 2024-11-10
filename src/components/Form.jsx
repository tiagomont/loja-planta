import { useState } from 'react';
import Email from '../assets/images/email.png'

export default function Form() {
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