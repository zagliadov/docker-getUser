import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../store/userSlice';
import { createHmac } from 'crypto';
import { removeMessage } from '../../../store/userSlice';
import {ServerMessage, InputSubmit, InputText, Form, FormWraper} from '../../syledComponet/styledComponent';
import { useHistory } from 'react-router-dom';


const Login = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();
    const message = useSelector(state => state.user.message);
    const history = useHistory();
    const user = useSelector( state => state.user.user)

    const onSubmit = async (data) => {
        data.password = await createHmac('sha256', data.password).update('pass').digest('hex');
        await dispatch(login(data));
        reset({ data })
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
        if(localStorage.getItem('user').length > 2) {
            history.push('/')
        }
    }, [user, history])

    useEffect(() => {
        setTimeout(() => {
            if (message?.length > 0) return dispatch(removeMessage(''))
        }, 2000)
    }, [message, dispatch])

    return (
        <FormWraper>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputText type='text' {...register('email', { required: true })} />
                <InputText type='text'{...register('password', { required: true })} />
                <InputSubmit type='submit' defaultValue="Sign In" />
                {message && <ServerMessage >{message}</ServerMessage>}
            </Form>
        </FormWraper>
    );
};

export default Login;