import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FizzBuzzScreen } from '@fizzbuzz/ui/screens/FizzBuzzScreen';
import { ReverseStringScreen } from '@reverse_string/ui/screens/ReverseStringScreen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="FizzBuzz" component={FizzBuzzScreen} />
      <Stack.Screen name="Reverse String" component={ReverseStringScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
