import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export default createSlice({
    name: 'data',
    initialState: {
        status: 'idle',
        array: []
    },
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(fetchDatas.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchDatas.fulfilled, (state, action) => {
                state.status = 'idle';
                // console.log(action);
                state.array = JSON.parse(action.payload);
            })
    }

})

export const fetchDatas = createAsyncThunk('data/fetchDatas', async () => {
    let dataFile = require('../data/songs.json');
    let stringData = JSON.stringify(dataFile);
    return stringData;
})