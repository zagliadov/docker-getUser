import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Box from './Box';
import { updateElement } from '../../store/userSlice';


const BoxWrapper = styled.div`
    padding: 20px;
`;


const Profile = () => {

    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch();
    // firstname
    const [firstname, setFirstname] = useState('');
    const [firstnameOpen, setFirstnameOpen] = useState(false);
    // lastname
    const [lastname, setLastname] = useState('');
    const [lastnameOpen, setLastnameOpen] = useState(false);
    // email
    const [email, setEmail] = useState('');
    const [emailOpen, setEmailOpen] = useState(false);


    /**
     * При перезагрузке запускается событие setUser из компонента
     * Header.js, событие записывает в store.js данные пользователя из localStorage
     * Перезаписывая в Profile данные пользователя их нужно перезаписать в localStorage
     */ 
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])




    return (
        <BoxWrapper>
            <Box
                name='Firstname'
                fieldName={user?.firstname}
                id={user?.id}
                setElem={setFirstname}
                open={firstnameOpen}
                setOpen={setFirstnameOpen}
                dispatch={dispatch}
                text={firstname}
                updateElement={updateElement}
            />
            {/* lastname */}
            <Box
                name='Lastname'
                fieldName={user?.lastname}
                id={user?.id}
                setElem={setLastname}
                open={lastnameOpen}
                setOpen={setLastnameOpen}
                dispatch={dispatch}
                text={lastname}
                updateElement={updateElement}
            />
            {/* email */}
            <Box
                name='Email'
                fieldName={user?.email}
                id={user?.id}
                setElem={setEmail}
                open={emailOpen}
                setOpen={setEmailOpen}
                dispatch={dispatch}
                text={email}
                updateElement={updateElement}
            />
        </BoxWrapper>
    );
};

export default Profile;