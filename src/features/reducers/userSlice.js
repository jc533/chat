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
        wsStart:false
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
            state.wsStart = true;
            return state;
        },
        endWebSocket:(state,action)=>{
            state.wsStart = false;
            return state;
        },
        wsDisconnected:(state,action)=>{
            state.isConnected = false;
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
        sendMessage:(state,action)=>{
            state.wsStart = true
            return state;
        }
    }
});
export const {init,startWebSocket,wsConnected,sendMessage,receiveSend,endWebSocket,wsDisconnected} = userSlice.actions;
export default userSlice.reducer;