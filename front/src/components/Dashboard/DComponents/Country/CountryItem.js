import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import { DeleteMajor } from '@shopify/polaris-icons';
import classes from './countryItem.module.sass';
import {removeCountry} from '../../../../store/countrySlice';


const MyDeleteMajor = styled(DeleteMajor)`
    width: 50px;
    height: 20px;
    cursor: pointer;
`;



const CountryItem = ({ country }) => {


    const dispatch = useDispatch();

    return (
        <div>
            {country?.map(item => {
                return (
                    <div key={item.id} className={classes.wrapper}>
                        <div className={classes.wrapper_item}>
                           <span>Country name: {item.country_name}</span> 
                        </div>
                        <div>
                           <span>Country population: {item.country_population}</span>
                           
                        </div>
                        <div>
                            <MyDeleteMajor onClick={() => dispatch(removeCountry(item.id))} />
                        </div>
                        
                        
                        
                        
                    </div>
                )
            })}
        </div>
    );
};

export default CountryItem;