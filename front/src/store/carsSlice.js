import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const getCars = createAsyncThunk(
    'cars/getCars',
    async () => {
        try {
            return await axios.get(`http://0.0.0.0:9001/api/cars`)
                .then(response => response.data)
                .then(data => console.log(data))

        } catch (error) {
            console.log(error.message)
        }
    }
)


const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        status: 'loading',
        cars: [],
    },
    reducers: {
       
    },
    extraReducers: {
        [getCars.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getCars.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            //state.user = payload;
        },
        [getCars.rejected]: (state, action) => {

        },
        
    }
});


export const { 
   
} = carsSlice.actions



export default carsSlice.reducer;