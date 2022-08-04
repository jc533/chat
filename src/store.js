import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "./features/reducers";
import wsMiddleware from "./socketMiddleware";
import ws from "./socketio-client";
const socket = new ws();
export default configureStore({
    reducer:{
        user:userReducer
    },
    middleware:
    (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(wsMiddleware(socket)) 
});