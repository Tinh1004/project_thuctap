import filterSlice from './filterSlice/filterSlice'
import dataSlice from './dataSlice/dataSlice'
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        data: dataSlice.reducer,
    }
})

export default store;