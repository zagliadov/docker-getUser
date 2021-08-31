import React from 'react';
import { useForm } from 'react-hook-form';
import { InputSubmit, InputText, Form } from '../../../syledComponet/styledComponent';
import { useDispatch } from 'react-redux';
import { createCountry } from '../../../../store/countrySlice';
import {useHistory} from 'react-router-dom';

const AddCountry = () => {

    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();
    const onSubmit = (data) => {
        reset({ data })
        dispatch(createCountry(data));
        history.push('/dashboard/country')
    }


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputText type='text' {...register('country_name', { required: true })} />
            <InputText type='text' {...register('country_population', { required: true })} />
            <InputSubmit type='submit' />
        </Form>
    );
};

export default AddCountry;