import { createSlice } from "@reduxjs/toolkit";

// Initial value (What data should be loaded at first)
const initialState = {
    users : [] // list of user
}

// Creating slice in store
export const userSlice = createSlice({
    name : "users",
    initialState,

    // reducer : List of actions (Add data to list, remove, change)
    reducers : {
        // Inserting/adding data into that empty array
        // state : above state (users - Empty Array)
        // action : we can trigger it from anywhere (Homepage)
        
        addUser : (state, action) => {
            // state ma user ko data filled garnu paro
            state.users = action.payload;
        }


    }
})

// exporting the reducer (Actions)
export const {addUser} = userSlice.actions;
export default userSlice.reducer;

