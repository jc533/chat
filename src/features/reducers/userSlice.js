import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        name:"", 
        isConnected:false,
        num:null,
        friends:[],
        messages:[],
        rooms:[],
    },
    reducers:{
        init:(state,action)=>{
            state.name = action.payload.name;
            state.num = action.payload.num;
            state.friends = action.payload.data.friends;
            state.rooms = action.payload.data.rooms;
            state.messages = action.payload.data.messages;
            return state;
        },
        startWebSocket:(state,action)=>{
            return state;
        },
        wsConnected:(state,action)=>{
            state.isConnected = true;
            return state;
        },
        receiveSend:(state,action)=>{
            console.log(action.payload);
            state.messages.push(action.payload);
            return state;
        },
        sendMessage:(state,action)=>state
    }
});
export const {init,startWebSocket,wsConnected,sendMessage,receiveSend} = userSlice.actions;
export default userSlice.reducer;