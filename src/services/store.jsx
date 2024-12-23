import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import userSlice from "./userslice";
import { userApi } from "./api";
const  store = configureStore({
    reducer: {
        "users": userSlice.reducer,
        [userApi.reducerPath]: userApi.reducer
    }
    ,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(userApi.middleware)
})

setupListeners(store.dispatch)
export default store;