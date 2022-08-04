import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "./features/reducers";
import wsMiddleware from "./socketMiddleware";
export default configureStore({
    reducer:{
        user:userReducer
    },
    // middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(wsMiddleware) 
});