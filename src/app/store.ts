import { configureStore } from "@reduxjs/toolkit";
import fizzbuzzReducer from "@fizzbuzz/fizzbuzzSlice";
import reverseStringReducer from "@reverse_string/reverseStringSlice";

export const store = configureStore({
    reducer: {
        fizzbuzz: fizzbuzzReducer,
        reverseString: reverseStringReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
