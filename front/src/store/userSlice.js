import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { transformTime } from './utils/utils';
import { createHmac } from 'crypto';


export const registration = createAsyncThunk(
    'user/registration',
    async (data) => {
        let newDate = new Date();
        data.date = `${transformTime(newDate.getFullYear().toString())}-${transformTime(newDate.getMonth().toString())}-${transformTime(newDate.getDate().toString())}`
        data.password = await createHmac('sha256', data.password).update('pass').digest('hex');
        data.role = 'user';
        try {
            return await axios.post(`http://0.0.0.0:9001/api/auth/registration`, data)
                .then(response => response.data)
                .then(data => {
                    if (data.message) {
                        return data.message
                    }
                    if (data.token) {
                        return axios.get(`http://0.0.0.0:9001/api/auth/private`, {
                            headers: {
                                Authorization: `Bearer ${data.token}`
                            }
                        })
                            .then(response => response.data)
                            .then(data => data[0])
                    }
                })

        } catch (error) {
            console.log(error.message)
        }
    }
);

export const login = createAsyncThunk(
    'user/login',
    async (data) => {
        try {
            return await axios.post(`http://0.0.0.0:9001/api/auth/login`, data)
                .then(response => response.data)
                .then(data => {
                    if (data.message) {
                        return data.message
                    }
                    if (data.token) {
                        return axios.get(`http://0.0.0.0:9001/api/auth/private`, {
                            headers: {
                                Authorization: `Bearer ${data.token}`
                            }
                        })
                            .then(response => response.data)
                            .then(data => data[0])
                    }
                })
        } catch (error) {
            console.log(error.message);
        }
    }
)




const userSlice = createSlice({
    name: 'user',
    initialState: {
        status: 'loading',
        user: [],
        message: '',
    },
    reducers: {
        removeMessage(state, { payload }) {
            state.message = payload;
        },
        setUser(state, { payload }) {
            state.user = payload;
        },

    },
    extraReducers: {
        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> REGISTRATION    
        [registration.pending]: (state, action) => { state.status = 'loading'; },
        [registration.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            if (typeof payload != 'string') {
                state.user = payload;
            }
            if (typeof payload === 'string') {
                state.message = payload
            }

        },
        [registration.rejected]: (state, action) => { },
        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> LOGIN
        [login.pending]: (state, action) => { state.status = 'loading'; },
        [login.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            if (typeof payload != 'string') {
                state.user = payload;
            }
            if (typeof payload === 'string') {
                state.message = payload
            }
        },
        [login.rejected]: (state, action) => { },
    }
});


export const {
    removeMessage,
    setUser,
} = userSlice.actions



export default userSlice.reducer;