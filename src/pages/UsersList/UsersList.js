import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ActivityIndicator, Text, TouchableOpacity, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getUsersList } from '../../modules/axios/query';
import { classname } from '../../styles/styles';

function UsersList() {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const users = useSelector((state) => state.usersListSlice.users);
  useEffect(() => {
    dispatch(getUsersList('users'));
  }, []);

  const transitionDeteil = (el) => {
    navigate('UserDetail', { id: el });
  };
  return (
    <View style={classname.flex}>
      {users?.data?.length > 0 ? users?.data?.map((el) => (
        <View key={el.id}>
          <TouchableOpacity onPress={() => transitionDeteil(el.id)}>
            <Text>{el.firstName}</Text>
          </TouchableOpacity>
        </View>
      )) : <ActivityIndicator size="large" color="#000" />}
    </View>
  );
}

export default UsersList;
