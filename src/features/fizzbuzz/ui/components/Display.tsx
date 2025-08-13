import React from "react";
import { Text, View } from "react-native";

export type DisplayProps = {
  value: number;
  label: string;
}

export const Display = (props: DisplayProps) => {
    const { value, label } = props;
    return (
        <View style={{ padding: 24, alignItems: "center" }}>
            <Text style={{ fontSize: 48, fontWeight: "700" }}>{label}</Text>
            <Text style={{ fontSize: 16, opacity: 0.6, marginTop: 8 }}>({value})</Text>
        </View>
    );
};
