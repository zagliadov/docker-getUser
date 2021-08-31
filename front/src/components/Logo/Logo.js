import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components'

const MyLink = styled(Link)`
    display: flex;
    text-decoration: none;
    padding: 5px 10px;
    font-size: 25px;
`;


const Logo = () => {
    return (
        <MyLink to='/'>Logo</MyLink> 
    );
};

export default Logo;