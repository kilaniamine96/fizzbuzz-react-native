import { AppDispatch, RootState } from "@app/store";
import { setComputing, setComputed, setError } from "./fizzbuzzSlice.ts";
import { computeFizzBuzz } from "@fizzbuzz/domain/usecases/computeFizzBuzz";

export const computeForValue =
    (value: number) =>
        async (dispatch: AppDispatch, getState: () => RootState) => {
            try {
                dispatch(setComputing());
                const { config } = getState().fizzbuzz;
                await Promise.resolve();
                const out = computeFizzBuzz({ value, config });
                dispatch(setComputed(out));
            } catch (e: any) {
                dispatch(setError(e?.message ?? "Unknown error"));
            }
        };

export const next = () => (dispatch: AppDispatch, getState: () => RootState) => {
    const { current } = getState().fizzbuzz;
    return dispatch(computeForValue(current + 1) as any);
};

export const reset = () => (dispatch: AppDispatch) => {
    return dispatch(computeForValue(1) as any);
};
