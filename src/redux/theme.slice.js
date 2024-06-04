import { createSlice } from "@reduxjs/toolkit";

const state = {
    theme: "light"
}

const themeSlice = createSlice({
    name: 'theme',
    initialState: state,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        }
    }
})
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;