import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { email: "test@example.com", password: "password123" }, // Example user
];

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        checkUser: (state, action) => {
            const { email, password } = action.payload;
            const userExists = state.some((user) => user.email === email && user.password === password);
            if (!userExists) return;
        },
    },
});

export const { checkUser } = loginSlice.actions;
export default loginSlice.reducer;