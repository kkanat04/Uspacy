import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './stackCustom/AuthStack';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  );
}

export default MyStack;
