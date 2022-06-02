import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../pages/Home/Home';
import SignIn from "../../components/SigIn/SignIn";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'SigIn'} component={SignIn} />
    </Stack.Navigator>
  );
};

export default AuthStack;
