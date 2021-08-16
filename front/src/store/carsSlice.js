import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const getTotalNumbersOfCars = createAsyncThunk(
    'cars/getTotalNumbersOfCars',
    async () => {
        try {
            return await axios.get(`http://0.0.0.0:9001/api/cars/all_sales`)
                .then(response => response.data)
                .then(data => data[0])

        } catch (error) {
            console.log(error.message)
        }
    }
)
export const getTotalNumbersOfCarsByModels = createAsyncThunk(
    'cars/getTotalNumbersOfCarsByModels',
    async () => {
        try {
            return await axios.get(`http://0.0.0.0:9001/api/cars/sales_by_model`)
                .then(response => response.data)
                .then(data => data)

        } catch (error) {
            console.log(error.message)
        }
    }
)

//Количество продаж автомобилей которые продал завод по моделям
export const getSalesAmountByModel = createAsyncThunk(
    'cars/getSalesAmountByModel',
    async () => {
        try {
            return await axios.get(`http://0.0.0.0:9001/api/cars/sales_amount_by_model`)
                .then(response => response.data)
                .then(data => data)

        } catch (error) {
            console.log(error.message)
        }
    }
)

//Количество продаж автомобилей которые продал завод по маркам(брендам)
export const getSalesAmountByBrands = createAsyncThunk(
    'cars/getSalesAmountByBrands',
    async () => {
        try {
            return await axios.get(`http://0.0.0.0:9001/api/cars/sales_amount_by_brands`)
                .then(response => response.data)
                .then(data => data)

        } catch (error) {
            console.log(error.message)
        }
    }
)
//6.Самые выгодные модели автомобилей (по разнице себестоимость - цена при продаже)
export const getMostProfitableModels = createAsyncThunk(
    'cars/getMostProfitableModels',
    async () => {
        try {
            return await axios.get(`http://0.0.0.0:9001/api/cars/most_profitable_models`)
                .then(response => response.data)
                .then(data => data)

        } catch (error) {
            console.log(error.message)
        }
    }
)


export const getModelOrder = createAsyncThunk(
    'cars/getModelOrder',
    async (data) => {
        try {
            return await axios.post(`http://0.0.0.0:9001/api/cars/model_order`, data)
                .then(response => response.data)
                .then(data => data)

        } catch (error) {
            console.log(error.message)
        }
    }
)







const carsSlice = createSlice({
    name: 'data',
    initialState: {
        status: 'loading',
        data: [],
        message: '',
    },
    reducers: {
        resetMessage(state, { payload }) {
            state.message = payload;
        }
    },
    extraReducers: {
        [getTotalNumbersOfCars.pending]: (state, action) => { state.status = 'loading'; },
        [getTotalNumbersOfCars.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.data = payload;
        },
        [getTotalNumbersOfCars.rejected]: (state, action) => { },
        //
        [getTotalNumbersOfCarsByModels.pending]: (state, action) => { state.status = 'loading'; },
        [getTotalNumbersOfCarsByModels.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.data = payload;
        },
        [getTotalNumbersOfCarsByModels.rejected]: (state, action) => { },
        ////Количество продаж автомобилей которые продал завод по моделям
        [getSalesAmountByModel.pending]: (state, action) => { state.status = 'loading'; },
        [getSalesAmountByModel.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.data = payload;
        },
        [getSalesAmountByModel.rejected]: (state, action) => { },
        ////Количество продаж автомобилей которые продал завод по брендам
        [getSalesAmountByBrands.pending]: (state, action) => { state.status = 'loading'; },
        [getSalesAmountByBrands.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.data = payload;
        },
        [getSalesAmountByBrands.rejected]: (state, action) => { },
        //6.Самые выгодные модели автомобилей (по разнице себестоимость - цена при продаже)
        [getMostProfitableModels.pending]: (state, action) => { state.status = 'loading'; },
        [getMostProfitableModels.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.data = payload;
        },
        [getMostProfitableModels.rejected]: (state, action) => { },
        //7.
        [getModelOrder.pending]: (state, action) => { state.status = 'loading'; },
        [getModelOrder.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.message = payload?.message;
            state.data = payload?.order;
        },
        [getModelOrder.rejected]: (state, action) => { },
    }
});


export const { 
    resetMessage,
} = carsSlice.actions



export default carsSlice.reducer;