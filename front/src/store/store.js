import { configureStore } from '@reduxjs/toolkit';
import carsSlice from './carsSlice';
import userSlice from './userSlice';
import countrySlice from './countrySlice';
import productsSlice from './porductsSlice';

export default configureStore({
    reducer: {
        data: carsSlice,
        user: userSlice,
        country: countrySlice,
        products: productsSlice,
    }
});