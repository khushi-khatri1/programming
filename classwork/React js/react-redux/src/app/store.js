import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contactSlice";
import userSlice from "./userSlice";

export default configureStore({
    reducer:{
        user:userSlice,
        contact:contactSlice
    }
})