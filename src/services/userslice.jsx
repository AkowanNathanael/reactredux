import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { value: [] },
    reducers: {
        addUser: (state,action) => {
            state.value=state.value.push(action.payload)
        }
    }
})

export default userSlice;