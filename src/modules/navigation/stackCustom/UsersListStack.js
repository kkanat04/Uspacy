import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UsersList from '../../../pages/UsersList/UsersList';
import UserDetail from '../../../components/UserDetail/UserDetail';

const Stack = createStackNavigator();

function UsersListStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="UsersList" component={UsersList} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
}

export default UsersListStack;
