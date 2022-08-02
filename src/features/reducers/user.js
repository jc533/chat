import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        num:"",
        friends:[],
        rooms:[]
    },
    reducers:{
        none:state=>state
    }
});
export default userSlice;