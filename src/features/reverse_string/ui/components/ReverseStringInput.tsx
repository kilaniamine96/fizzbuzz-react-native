import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextInput, View } from 'react-native';
import { reverseThunk } from '@reverse_string/reverseStringThunks.ts';

export const ReverseStringInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <View style={{ padding: 24 }}>
      <TextInput
        placeholder="Entrez un mot"
        value={text}
        onChangeText={setText}
        style={{ borderWidth: 1, padding: 12, marginBottom: 12 }}
      />
      <Button title="Inverser" onPress={() => dispatch(reverseThunk(text) as any)} />
    </View>
  );
};
