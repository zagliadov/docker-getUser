import { configureStore } from '@reduxjs/toolkit';
import carsSlice from './carsSlice';
import userSlice from './userSlice';

export default configureStore({
    reducer: {
        data: carsSlice,
        user: userSlice,
    }
});