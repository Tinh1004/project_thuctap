import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export default createSlice({
    name: 'data',
    initialState: {
        status: 'idle',
        array: [],
        song: {},
    },
    reducers: {
        audioPlayerNextSong: (state, action) => {
            if (action.payload >= state.array.length){
                state.song = state.array[0]
            }
            else {
                const currentSong = state.array.filter(song => song.id === action.payload);
                state.song = currentSong[0]
            }
        },
        audioPlayerPreSong: (state,action) => {
            if (action.payload < 0){
                state.song = state.array[state.array.length - 1]
            }
            else {
                const currentSong = state.array.filter(song => song.id === action.payload);
                state.song = currentSong[0]
            }
        },
        audioChangeSong: (state,action) => {
            const currentSong = state.array.filter(song => song.id === action.payload);
            state.song = currentSong[0] 
        }

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
                    state.song = data[0];
                }
            })
    }

})

export const fetchDatas = createAsyncThunk('data/fetchDatas', async () => {
    let dataFile = require('../data/songs.json');
    let stringData = JSON.stringify(dataFile);
    return stringData;
})



