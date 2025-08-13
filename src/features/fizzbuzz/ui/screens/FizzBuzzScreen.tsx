import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { next, reset } from '@fizzbuzz/fizzbuzzThunks.ts';
import { selectError, selectLabel, selectCurrent, selectStatus } from '@fizzbuzz/fizzbuzzSelectors.ts';
import { CounterControls } from "../components/CounterControls";
import { Display } from "../components/Display";

export const FizzBuzzScreen = () => {
    const dispatch = useDispatch();
    const label = useSelector(selectLabel);
    const current = useSelector(selectCurrent);
    const status = useSelector(selectStatus);
    const error = useSelector(selectError);

    return (
        <View style={{ flex: 1, justifyContent: "center", padding: 24 }}>
            <Display value={current} label={label} />
            {status === "computing" ? (
                <ActivityIndicator />
            ) : (
                <CounterControls
                    onNext={() => dispatch(next() as any)}
                    onReset={() => dispatch(reset() as any)}
                />
            )}
            {error && <Text style={{ color: "red", marginTop: 16 }}>{error}</Text>}
        </View>
    );
};
