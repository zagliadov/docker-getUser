import React from 'react';
import { HomeMajor, ProductsMajor, ViewMinor, BankMajor } from '@shopify/polaris-icons';
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const MyLinkName = styled.p`
  font-size: 18px; 
  padding-left: 20px;
`;
const MyLink = styled(Link)`
    display: flex;
    justify-content: flex-start
    text-decoration: none;
    padding: 15px 10px;
`;
const MyViewMinor = styled(ViewMinor)`
    width: 20px;
    height: 20px;
`;
const MyBankMajor = styled(BankMajor)`
    width: 20px;
    height: 20px;
`;
const MyProductsMajor = styled(ProductsMajor)`
    width: 20px;
    height: 20px;
`;
const MyHomeMajor = styled(HomeMajor)`
    width: 20px;
    height: 20px;
`;
const DashboardMenu = styled.menu`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

const OptionsMenu = () => {



  return (

    <DashboardMenu>
      <MyLink to='/'><MyHomeMajor /><MyLinkName>Home</MyLinkName></MyLink>
      <MyLink to='/dashboard/all_users'><MyViewMinor /><MyLinkName>All Users</MyLinkName></MyLink>
      <MyLink to='/dashboard/products'><MyProductsMajor /><MyLinkName>Products</MyLinkName></MyLink>
      <MyLink to='/dashboard/country'><MyBankMajor /><MyLinkName>Country</MyLinkName></MyLink>
    </DashboardMenu>

  )
};

export default OptionsMenu;

