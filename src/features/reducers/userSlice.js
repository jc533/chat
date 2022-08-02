import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        num:"",
        friends:[],
        rooms:[]
    },
    reducers:{
        init:(state,action)=>{
            state = action.payload;
            console.log("jizz");
            console.log(action.payload);
            return state;
        }
    }
});
export const {init} = userSlice.actions;
export default userSlice.reducer;