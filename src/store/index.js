import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "../features/reducers";
export default configureStore({
    reducer:{
        user:userReducer
    }
});