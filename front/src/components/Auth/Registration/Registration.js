import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registration } from '../../../store/userSlice';
import { removeMessage } from '../../../store/userSlice';
import { useHistory } from 'react-router-dom'
import { ServerMessage, InputSubmit, InputText, Form, FormWraper } from '../../syledComponet/styledComponent';


const Registration = () => {


    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const message = useSelector(state => state.user.message);
    const user = useSelector(state => state.user.user);

    const onSubmit = (data) => {
        dispatch(registration(data))
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
                <InputText type='text' {...register('firstname', { required: true })} />
                <InputText type='text' {...register('lastname', { required: true })} />
                <InputText type='text' {...register('email', { required: true })} />
                <InputText type='text' {...register('password', { required: true })} />
                <InputSubmit type='submit' defaultValue="Sign Up" />
                {message && <ServerMessage>{message}</ServerMessage>}
            </Form>
        </FormWraper>
    );
};

export default Registration;