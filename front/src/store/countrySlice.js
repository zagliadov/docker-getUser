import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getAllCountry = createAsyncThunk(
    'country/getAllCountry',
    async () => {
        try {
            return await axios.get(`http://0.0.0.0:9001/api/country/all_country`)
                .then(response => response.data)
                .then(data => {
                    return data;
                })
        } catch (error) {
            console.log(error);
        }
    }
);
export const descPopulation = createAsyncThunk(
    'country/descPopulation',
    async () => {
        try {
            return await axios.get(`http://0.0.0.0:9001/api/country/big_population`)
                .then(response => response.data)
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log(error.message);
        }
    }
)

export const ascPopulation = createAsyncThunk(
    'country/ascPopulation',
    async () => {
        try {
            return await axios.get(`http://0.0.0.0:9001/api/country/small_population`)
                .then(response => response.data)
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log(error.message);
        }
    }
);

export const getTotalPopulation = createAsyncThunk(
    'country/getTotalPopulation',
    async () => {
        try {
            return await axios.get(`http://0.0.0.0:9001/api/country/total_population`)
                .then(response => response.data)
                .then(data => {
                    return data[0].count
                })
        } catch (error) {
            console.log(error.message);
        }
    }
);


export const createCountry = createAsyncThunk(
    'country/createCountry',
    async (data) => {
        try {
            return await axios.post(`http://0.0.0.0:9001/api/country/create_country`, { data })
                .then(response => response.data)
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log(error.message);
        }
    }
);

export const removeCountry = createAsyncThunk(
    'country/removeCountry',
    async (id) => {
        try {
            return await axios.delete(`http://0.0.0.0:9001/api/country/remove_country/${id}`)
                .then(response => response.data)
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log(error.message);
        }
    }
);

export const findCountry = createAsyncThunk(
    'country/findCountry',
    async (data) => {
        try {
            if (!data || data === '') {
                return await axios.get(`http://0.0.0.0:9001/api/country/all_country/`, { data })
                    .then(response => response.data)
                    .then(data => {
                        return data
                    })
            }

            return await axios.post(`http://0.0.0.0:9001/api/country/find_country/`, { data })
                .then(response => response.data)
                .then(data => {
                    if (!data) return
                    return data
                })
        } catch (error) {
            console.log(error.message);
        }
    }
);




const countrySlice = createSlice({
    name: 'country',
    initialState: {
        status: 'loading',
        country: [],
        totalPopulation: '',
    },
    reducers: {

    },
    extraReducers: {
        ////////////////////////////////////////////////////
        [getAllCountry.pending]: (state, action) => { state.status = 'loading'; },
        [getAllCountry.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.country = payload;
        },
        [getAllCountry.rejected]: (state, action) => { },
        ////////////////////////////////////////////////////
        [descPopulation.pending]: (state, action) => { state.status = 'loading'; },
        [descPopulation.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.country = payload;
        },
        [descPopulation.rejected]: (state, action) => { },
        ////////////////////////////////////////////////////
        [ascPopulation.pending]: (state, action) => { state.status = 'loading'; },
        [ascPopulation.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.country = payload;
        },
        [ascPopulation.rejected]: (state, action) => { },
        ////////////////////////////////////////////////////
        [getTotalPopulation.pending]: (state, action) => { state.status = 'loading'; },
        [getTotalPopulation.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.totalPopulation = payload;
        },
        [getTotalPopulation.rejected]: (state, action) => { },
        ////////////////////////////////////////////////////
        [createCountry.pending]: (state, action) => { state.status = 'loading'; },
        [createCountry.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.country = payload;
        },
        [createCountry.rejected]: (state, action) => { },
        ////////////////////////////////////////////////////
        [removeCountry.pending]: (state, action) => { state.status = 'loading'; },
        [removeCountry.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.country = payload;
        },
        [removeCountry.rejected]: (state, action) => { },
        ////////////////////////////////////////////////////
        [findCountry.pending]: (state, action) => { state.status = 'loading'; },
        [findCountry.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            if (payload.length === undefined) {
                try {
                    if (payload?.countrys == undefined) return
                    state.country = payload?.countrys[0];
                    state.totalPopulation = payload?.count[0][0].count;
                } catch (error) {
                    console.log(error.type)
                }
            } else{
                state.country = payload
            }
            




            //console.log(payload)
        },
        [findCountry.rejected]: (state, action) => { },

    }
});


export const {

} = countrySlice.actions



export default countrySlice.reducer;