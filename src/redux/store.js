import filterSlice from "./filterSlice/filterSlice";
import dataSlice from "./dataSlice/dataSlice";
import userSlice from "./userSlice/userSlice";
import { authSlice } from "./slices/authSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    data: dataSlice.reducer,
    user: userSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
