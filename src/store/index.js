import { configureStore } from "@reduxjs/toolkit";
import {userSlice} from "../features/reducers";
export default configureStore({
    reducer:{
        userSlice
    }
});