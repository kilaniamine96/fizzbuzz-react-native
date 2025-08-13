import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReverseStringState {
  original: string;
  reversed: string;
};

const initialState: ReverseStringState = {
  original: "",
  reversed: "",
};

const slice = createSlice({
  name: "reverseString",
  initialState,
  reducers: {
    setInput(state, action: PayloadAction<string>) {
      state.original = action.payload;
    },
    setResult(state, action: PayloadAction<string>) {
      state.reversed = action.payload;
    },
  },
});

export const { setInput, setResult } = slice.actions;
export default slice.reducer;
