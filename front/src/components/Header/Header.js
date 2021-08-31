import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/userSlice';
import {CustomersMajor} from '@shopify/polaris-icons'


const MyCustomersMajor = styled(CustomersMajor)`
    width: 60px;
    height: 20px;
    cursor: pointer;
    transition: all .2s ease-out;
    border: 1px solid transparent;
`;

const LinkWrapper = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 70%;
    padding-right: 100px
`;
const LogoWrapper = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
`;
const MyLink = styled(Link)`
    width: 200px;
    heigth: 100px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 5px 10px 10px 10px;
    font-size: 25px;
    transition: all .2s ease-out;
    &:hover {
        transition: all .2s ease-out;
        align-items: center;
        ${MyCustomersMajor} {
            width: 60px;
            height: 60px;
            transition: all .2s ease-out;
            border-radius: 100%;
            border: 1px solid silver;
        }
    }
`;
const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    height: 100px;
`;


const Header = () => {

    let role = useSelector(state => state.user?.user?.role?.trim());
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUser(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []));
    }, [dispatch]);



    return (
        <HeaderWrapper>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>


            {(role === 'admin' || role === 'user')
                ?
                <LinkWrapper>
                    <MyLink to='/' onClick={() => {
                        dispatch(setUser([]))
                        localStorage.removeItem('user')
                    }}>Sign out
                    </MyLink>
                    {role === 'admin' ? <MyLink to='/dashboard'>Dashboard</MyLink> : null}
                    {role === 'user' ? <MyLink to='/profile'>Profile <MyCustomersMajor /></MyLink> : null}
                </LinkWrapper>
                :

                <LinkWrapper >
                    <MyLink to='/registration'>Registration</MyLink>
                    <MyLink to='/login'>Login</MyLink>
                </LinkWrapper>
            }





        </HeaderWrapper>
    );
};

export default Header;