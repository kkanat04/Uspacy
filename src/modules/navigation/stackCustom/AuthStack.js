import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../../../components/SigIn/SignIn';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SigIn" component={SignIn} />
    </Stack.Navigator>
  );
}

export default AuthStack;
