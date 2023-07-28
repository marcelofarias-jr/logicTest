import React from 'react';
import {Formik} from 'formik';
import TextField from '@mui/material/TextField';

export default function Test04() {
    const initialValues = {
        name: '',
        email: '',
        message: '',
    };
    //const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const handleSubmit = async (values, {resetForm}) => {
        console.log('enviou', values);
        alert('Formulário enviado com sucesso');
        resetForm();
    };
    return (
        <div>
            <h1>Test 4: Form Validation</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                className='formik'
            >
                {({handleBlur, handleChange, handleSubmit, values}) => (
                    <form onSubmit={handleSubmit} className='form'>
                        <TextField
                            id='outlined-basic'
                            label='Name'
                            variant='outlined'
                            name='name'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            autoComplete='off'
                            required
                            value={values.name}
                        />
                        <TextField
                            id='outlined-basic'
                            label='Email'
                            variant='outlined'
                            name='email'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            autoComplete='off'
                            type='email'
                            value={values.email}
                            required
                        />
                        <TextField
                            id='outlined-basic'
                            label='Message'
                            variant='outlined'
                            name='message'
                            onBlur={handleBlur}
                            onChange={handleChange}
                            autoComplete='off'
                            value={values.message}
                            required
                            rows={5}
                        />

                        <button type='submit' className='buttonSubmit'>Send</button>
                    </form>
                )}
            </Formik>
        </div>

    );
}
