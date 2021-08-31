import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../store/porductsSlice';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { PlusMinor } from '@shopify/polaris-icons';
import { useHistory } from 'react-router-dom';

const MyPlusMinor = styled(PlusMinor)`
    width: 50px; height: 50px; cursor: pointer;
`;
const Wrapper = styled.div`
    border: 1px solid black;
    padding: 20px;
`;
const Button = styled.button`
    padding: 10px;    
`;
const ProductWrapper = styled.div`
    padding: 20px;
`;
const BrandName = styled.span`
    font-size: 20px;
    padding-right: 20px;
`;
const CountryName = styled.span`
    font-size: 20px;
    padding-right: 20px;
`;
const ImgWrapper = styled.img`
    border: 1px solid black;
`;

const Products = () => {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const products = useSelector(state => state.products.products)

    useEffect(() => {
        dispatch(getAllProducts())
    }, [])



    const handleClick = () => {
        history.push('/dashboard/add_product')
    }




    return (
        <Wrapper>
            <div>
                <MyPlusMinor onClick={() => handleClick()} /><span>Add new product</span>
            </div>
            {products && products.map(product => {
                return (
                    <ProductWrapper key={product.id}>
                        <BrandName>Brand: {product.brand}</BrandName>
                        <CountryName>Country: {product.country}</CountryName>
                        <ImgWrapper src={`http://localhost:9001/static/${product.picture[0]}`} />
                        <ImgWrapper src={`http://localhost:9001/static/${product.picture[1]}`} />
                        <ImgWrapper src={`http://localhost:9001/static/${product.picture[2]}`} />
                    </ProductWrapper>

                )
            })}
        </Wrapper>
    );
};

export default Products;