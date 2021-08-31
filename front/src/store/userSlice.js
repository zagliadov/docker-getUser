import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { transformTime } from './utils/utils';
import { createHmac } from 'crypto';


export const getAllUsers = createAsyncThunk(
    'user/getAllUsers',
    async () => {
        try {
            return await axios.get(`http://0.0.0.0:9001/api/users/all_users`)
                .then(response => response.data)
                .then(data => {
                   return data;
                })
        } catch (error) {
            console.log(error);
        }
    }
);
export const removeUser = createAsyncThunk(
    'user/removeUser',
    async (id) => {
        try {
            return await axios.delete(`http://0.0.0.0:9001/api/users/remove_user/${id}`)
                .then(response => response.data)
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log(error.message)
        }
    }
);

export const getThisUser = createAsyncThunk(
    'user/getThisUser',
    async (id) => {
        try {
            return await axios.get(`http://0.0.0.0:9001/api/users/user/${id}`)
                .then(response => response.data)
                .then(data => {
                    return data;
                })
        } catch (error) {
            console.log(error.message)
        }
    }
);

export const updateElement = createAsyncThunk(
    'user/updateElement',
    async (data) => {
        try {
            return await axios.put(`http://0.0.0.0:9001/api/users/profile/update`, {data})
                .then(response => response.data)
                .then(data => {
                    return data
                })
        } catch (error) {
            console.log(error.message);
        }
    }
)



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
        users: [],
        userDetail: [],

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
        /////////////////////////////////
        [getAllUsers.pending]: (state, action) => { state.status = 'loading'; },
        [getAllUsers.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.users = payload;
        },
        [getAllUsers.rejected]: (state, action) => { },
        ////////////////////////////////////////////////////
        [removeUser.pending]: (state, action) => { state.status = 'loading'; },
        [removeUser.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.users = payload;
        },
        [removeUser.rejected]: (state, action) => { },
        ////////////////////////////////////////////////////
        [getThisUser.pending]: (state, action) => { state.status = 'loading'; },
        [getThisUser.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.userDetail = payload;
        },
        [getThisUser.rejected]: (state, action) => { },
        ////////////////////////////////////////////////////
        [updateElement.pending]: (state, action) => { state.status = 'loading'; },
        [updateElement.fulfilled]: (state, { payload }) => {
            state.status = 'resolved';
            state.user = payload;
        },
        [updateElement.rejected]: (state, action) => { },
    }
});


export const {
    removeMessage,
    setUser,
} = userSlice.actions



export default userSlice.reducer;