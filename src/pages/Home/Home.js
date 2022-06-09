import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { classname } from '../../styles/styles';
import { removeItem } from '../../api/storage';

function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(removeItem());
  };
  return (
    <View style={classname.flex}>
      <TouchableOpacity
        onPress={() => navigation.navigate('NewsStack', { screen: 'Chat' })}
      >
        <Text>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={logOut}>
        <Text>log out</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
