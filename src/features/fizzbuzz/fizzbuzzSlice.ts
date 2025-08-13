import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultConfig, FizzBuzzConfig } from '@fizzbuzz/domain/entities/FizzBuzzConfig.ts';
import { DisplayProps } from '@fizzbuzz/ui/components/Display.tsx';

interface FizzBuzzState {
    current: number;
    label: string;
    config: FizzBuzzConfig;
    status: "idle" | "computing" | "error";
    error?: string;
};

const initialState: FizzBuzzState = {
    current: 1,
    label: "1",
    config: defaultConfig,
    status: "idle",
};

const slice = createSlice({
    name: "fizzbuzz",
    initialState,
    reducers: {
        setConfig(state, action: PayloadAction<FizzBuzzConfig>) {
            state.config = action.payload;
        },
        setComputing(state) {
            state.status = "computing";
            state.error = undefined;
        },
        setComputed(state, action: PayloadAction<DisplayProps>) {
            state.status = "idle";
            state.current = action.payload.value;
            state.label = action.payload.label;
        },
        setError(state, action: PayloadAction<string>) {
            state.status = "error";
            state.error = action.payload;
        },
    },
});

export const { setConfig, setComputing, setComputed, setError } = slice.actions;
export default slice.reducer;
