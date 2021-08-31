import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllCountry, descPopulation, ascPopulation, getTotalPopulation, findCountry  } from '../../../../store/countrySlice';
import CountryItem from './CountryItem';
import { ArrowUpMinor, ArrowDownMinor, PlusMinor, SearchMajor } from '@shopify/polaris-icons';

const icons = `width: 50px; height: 20px; cursor: pointer;`;
const MyArrowUpMinor = styled(ArrowUpMinor)`${icons}`;
const MySearchMajor = styled(SearchMajor)`${icons}`;
const MyArrowDownMinor = styled(ArrowDownMinor)`${icons}`;
const MyPlusMinor = styled(PlusMinor)`${icons}`;
const Heading = styled.h2`
    font-size: 25px;
`;
const CountryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const DataWrapper = styled.div`width: 100%;`;
const TotalPopulationWrapper = styled.div`padding: 10px;`;

const Country = () => {

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const country = useSelector(state => state.country.country);
    const totalPopulation = useSelector(state => state.country.totalPopulation);
    const history = useHistory();

    useEffect(() => {
        dispatch(getAllCountry())
        dispatch(getTotalPopulation());
    }, [dispatch, history]);

    useEffect(() => {
        dispatch(getAllCountry());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getTotalPopulation());
    }, [country, dispatch])

    // useEffect(() => {
    //     dispatch(getTotalPopulation());
    // }, [country])

    const handleClick = () => {
        history.push('/dashboard/add_country')
    }

    return (
        <CountryWrapper>
            <div>
                <Heading>Country</Heading>
                <MyArrowUpMinor onClick={() => dispatch(descPopulation())} /><span>Сначала большая популяция</span>
                <MyArrowDownMinor onClick={() => dispatch(ascPopulation())} /><span>Сначала малая популяция</span>
                <MyPlusMinor onClick={() => {
                    handleClick();
                }} /><span>Добавить страну</span>

                {open ?
                    <input type='text' onChange={(e) => dispatch(findCountry(e.target.value))} />
                    :
                    <MySearchMajor onClick={() => {
                        setOpen(!open);
                    }} />
                }

            </div>

            <DataWrapper>
                <CountryItem country={country} />
            </DataWrapper>

            <TotalPopulationWrapper>
                <p>Total population: {totalPopulation}</p>
            </TotalPopulationWrapper>
        </CountryWrapper>
    );
};

export default Country;