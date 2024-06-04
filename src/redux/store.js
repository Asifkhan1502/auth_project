import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./theme.slice.js";

const store = configureStore({
    reducer: {
        theme: ThemeSlice
    },
})

export default store;