import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice';

// Making storage
export const store = configureStore({

    // Config of user slice as a reducer
    reducer : {
        // for user
        users : userSlice
    }

})