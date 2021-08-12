import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getCars } from '../../store/carsSlice';

const Cars = () => {

    const dispatch = useDispatch();


    // useEffect(() => {
    //     dispatch(getCars())
    // }, [])


    return (
        <div>
            <button onClick={() => dispatch(getCars())}>get orders</button>
            <button>get models</button>
        </div>
    );
};

export default Cars;