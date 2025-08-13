import { AppDispatch } from "@app/store";
import { reverseString } from "@reverse_string/domain/usecases/reverseString";
import { setInput, setResult } from "./reverseStringSlice";

export const reverseThunk = (text: string) => (dispatch: AppDispatch) => {
  dispatch(setInput(text));
  const result = reverseString(text);
  dispatch(setResult(result));
};
