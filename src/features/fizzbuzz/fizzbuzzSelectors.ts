import { RootState } from "@app/store";

export const selectFizzBuzz = (s: RootState) => s.fizzbuzz;
export const selectLabel = (s: RootState) => s.fizzbuzz.label;
export const selectCurrent = (s: RootState) => s.fizzbuzz.current;
export const selectStatus = (s: RootState) => s.fizzbuzz.status;
export const selectError = (s: RootState) => s.fizzbuzz.error;
