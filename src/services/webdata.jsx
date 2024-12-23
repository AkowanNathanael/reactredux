import { createSlice } from "@reduxjs/toolkit";

const webdata = createSlice({
    name: "webdata",
    initialState: { value: { isLoggedIn: false, user: {}, token: "", isLoading: true } }
    ,
    reducers: {
        toggleIsLoggedIn: (state){
            state.value={...state.value,isLoggedIn: !state.value.isLoggedIn}
        }
    }
})