import filterSlice from './filterSlice/filterSlice'
import dataSlice from './dataSlice/dataSlice'
import userSlice from './userSlice/userSlice'
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        data: dataSlice.reducer,
        user: userSlice.reducer
    }
})

export default store;