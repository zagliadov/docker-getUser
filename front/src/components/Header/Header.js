import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.sass';
import Logo from '../Logo/Logo';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/userSlice';

const LinkWrapper = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 70%;
`;
const LogoWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
`;
const MyLink = styled(Link)`
    display: flex;
    text-decoration: none;
    padding: 5px 10px;
    font-size: 25px;
`;
const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    height: 100px;
`;


const Header = () => {

    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUser(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []));
    }, [dispatch])

    return (
        <HeaderWrapper>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>

            {user.role ?
                <LinkWrapper>
                    <MyLink to='/' onClick={() => {
                        dispatch(setUser([]))
                        localStorage.removeItem('user')
                    }}>Sign out
                    </MyLink>
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