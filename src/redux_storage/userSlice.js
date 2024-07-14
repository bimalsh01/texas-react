// Importing create slice
import  {createSlice} from '@reduxjs/toolkit'

// Making initial state
// what type of data, users hold\
const initialState = {
    users : []
}

export const userSlice = createSlice({
    name : 'users',
    initialState,

    // its for state data management
    // Add, edit, delete
    reducers : {
        // individual reducers (Task)

        // Task 1 : For Adding User to storage
        addUser: (state, action) => {
            // Finding state 
            // Adding data from payload to state
            state.users = action.payload
        }
    }
})

// exporting for individual uses
export const {addUser} = userSlice.actions;

// Export for redux storage uses
export default userSlice.reducer;


