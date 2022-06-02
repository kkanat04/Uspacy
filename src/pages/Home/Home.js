import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {classname} from '../../styles/styles';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={classname.flex}>
      <TouchableOpacity
        onPress={() => navigation.navigate('NewsStack', {screen: 'Chat'})}>
        <Text>Chat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
