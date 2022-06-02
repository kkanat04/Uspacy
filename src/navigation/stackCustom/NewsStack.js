import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import News from '../../pages/News/News';
import Chat from '../../components/Chat/Chat';

const Stack = createStackNavigator();

const NewsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'News'} component={News} />
      <Stack.Screen name={'Chat'} component={Chat} />
    </Stack.Navigator>
  );
};

export default NewsStack;
