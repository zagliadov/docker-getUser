import React from 'react';
import { useForm } from 'react-hook-form';
import { InputSubmit, InputText, Form } from '../../../syledComponet/styledComponent';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { addProduct } from '../../../../store/porductsSlice';


const AddProduct = () => {
    const dispatch = useDispatch();

    const imgConvert = (item) => {
        const arr = {};
        arr.fileName = item.name;
        let reader = new FileReader();
        reader.readAsDataURL(item);
        reader.onload = async () => {
            arr.photo = reader.result;
        }
        return arr;
    }
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        data.file1 = imgConvert(data.file1[0])
        data.file2 = imgConvert(data.file2[0])
        data.file3 = imgConvert(data.file3[0])
        dispatch(addProduct(data))
        history.push('/dashboard')
    }


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputText type='text' {...register('brand', { required: true })} />
            <InputText type='text' {...register('country', { required: true })} />
            <input type='file' {...register('file1', { required: true })} />
            <input type='file' {...register('file2', { required: true })} />
            <input type='file' {...register('file3', { required: true })} />
            <InputSubmit type='submit' />
        </Form>
    );
};

export default AddProduct;