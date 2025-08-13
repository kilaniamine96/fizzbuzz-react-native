import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from '@app/store.ts';
import { ReverseStringInput } from '@reverse_string/ui/components/ReverseStringInput.tsx';

export const ReverseStringScreen: React.FC = () => {
  const reversed = useSelector((s: RootState) => s.reverseString.reversed);
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ReverseStringInput />
      {reversed.length > 0 && (
        <Text style={{ textAlign: "center", marginTop: 20, fontSize: 18 }}>
          Résultat : {reversed}
        </Text>
      )}
    </View>
  );
};
