import React from 'react';
import OptionsMenu from '../OptionsMenu/OptionsMenu';
import AllUsers from '../Dashboard/DComponents/AllUsers';
import Products from '../Dashboard/DComponents/Products';
import InDetailUser from './DComponents/InDetailUser';
import Country from './DComponents/Country/Country';
import { Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import AddCountry from './DComponents/Country/AddCountry';
import AddProduct from './DComponents/Products/AddProduct';


const DashboardMenu = styled.section`
    display: flex;
    border: 1px solid black;
    padding: 50px 10px 10px 10px;
`;

const Dashboard = () => {
    return (
        <DashboardMenu>
            <OptionsMenu></OptionsMenu>



            <Switch>
                <Route path='/dashboard/all_users' component={AllUsers} />
                <Route path='/dashboard/user/:id' component={InDetailUser} />
                <Route path='/dashboard/products' component={Products} />
                <Route path='/dashboard/country' component={Country} />
                <Route path='/dashboard/add_country' component={AddCountry} />
                <Route path='/dashboard/add_product' component={AddProduct} />
            </Switch>
        </DashboardMenu>
    );
};

export default Dashboard;