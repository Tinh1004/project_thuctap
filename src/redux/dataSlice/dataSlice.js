import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export default createSlice({
    name: 'data',
    initialState: {
        status: 'idle',
        array: [],
        song: ""
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
                // console.log(action);\
                const data = JSON.parse(action.payload)
                state.array = data;
                if (data.length > 0) {
                    state.song = data[0].url;
                }
            })
    }

})

export const fetchDatas = createAsyncThunk('data/fetchDatas', async () => {
    let dataFile = require('../data/songs.json');
    let stringData = JSON.stringify(dataFile);
    return stringData;
})