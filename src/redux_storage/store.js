import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'

// Make a store
export const store = configureStore({

    // list of slice
    reducer : {
        users : userReducer
    }

})