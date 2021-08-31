import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { transformTime } from './utils/utils';

export const addProduct = createAsyncThunk(
    'product/addProduct',
    async (data) => {
        let newDate = new Date();

        let time = `${transformTime(newDate.getHours())}:${transformTime(newDate.getMinutes())}:${transformTime(newDate.getSeconds())}`;
        data.date = `${transformTime(newDate.getFullYear().toString())}-${transformTime(newDate.getMonth().toString())}-${transformTime(newDate.getDate().toString())} ${time}`

        try {
            setTimeout(() => {
                return axios.post(`http://0.0.0.0:9001/api/products/add_product`, data)
            }, 100)



        } catch (error) {
            console.log(error.message)
        }
    }
);

export const getAllProducts = createAsyncThunk(
    'product/getAllProducts',
    async () => {
        try {
            return await axios.get(`http://0.0.0.0:9001/api/products/all_products`)
                .then(response => response.data)
                .then(data => data[0])

        } catch (error) {
            console.log(error.message)
        }
    }
)





const productsSlice = createSlice({
    name: 'product',
    initialState: {
        status: 'loading',
        products: [],
        product: [],
    },
    reducers: {

    },
    extraReducers: {
        [addProduct.pending]: (state, action) => { state.status = 'loading'; },
        [addProduct.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.products = payload;
        },
        [addProduct.rejected]: (state, action) => { },
        //
        [getAllProducts.pending]: (state, action) => { state.status = 'loading'; },
        [getAllProducts.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.products = payload;
        },
        [getAllProducts.rejected]: (state, action) => { },
        //

    }
});


export const {

} = productsSlice.actions



export default productsSlice.reducer;