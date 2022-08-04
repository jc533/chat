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
        endWebSocket:(state,action)=>{
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
            if(action.payload){
                state.messages.push(action.payload[0]);;
            }
        },
        sendMessage:(state,action)=>{
            return state;
        }
    }
});
export const {init,startWebSocket,wsConnected,sendMessage,receiveSend,endWebSocket,wsDisconnected} = userSlice.actions;
export default userSlice.reducer;