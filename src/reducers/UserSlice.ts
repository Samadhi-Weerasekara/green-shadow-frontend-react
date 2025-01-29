import {User} from "../modals/User.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState : User[] = [];

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        },
        updateUser: (state, action) => {
            const index = state.findIndex(user => user.email === action.payload.email);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteUser: (state, action) => {
            const index = state.findIndex(user => user.email === action.payload.email);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;