import React from "react";
import { View, Button } from "react-native";

type Props = {
    onNext: () => void;
    onReset: () => void;
    disabled?: boolean;
};

export const CounterControls =  (props: Props) => {
  const { onNext, onReset, disabled } = props;
    return (
        <View style={{ flexDirection: "row", gap: 12, justifyContent: "center" }}>
            <Button title="Next" onPress={onNext} disabled={disabled} />
            <Button title="Reset" onPress={onReset} disabled={disabled} />
        </View>
    );
};
