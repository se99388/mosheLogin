import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import tokenService from '../../services/token-service'

const Login = ({ tokenCb }) => {

    const login = async(values)=>{
        const {token} = await tokenService.getTokenLogin(values)
        console.log(token)
        tokenCb(token)
    }

    return (<Formik
        initialValues={{ email: 'ofir@hylabs.co.il', password: '1234' }}
        onSubmit={login}
    >
        <Form>
            <div className='form-group'>
                <label>Email</label>
                <Field type='email' name='email' className='form-control' />
                <label>Password</label>
                <Field type='password' name='password' className='form-control' />
            </div>
            <button type='submit' className='btn btn-primary'>Login</button>
        </Form>
    </Formik>)
}

export default Login;

