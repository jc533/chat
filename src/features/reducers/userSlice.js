import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        isLogin:false,
        num:"",
        friends:[],
        rooms:[]
    },
    reducers:{
        init:(state,action)=>{
            state = action.payload;
            console.log(action.payload);
            return state;
        },
        webSocket:(state)=>state
    }
});
export const {init,webSocket} = userSlice.actions;
export default userSlice.reducer;