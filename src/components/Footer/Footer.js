import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { classname } from '../../styles/styles';

function Footer() {
  const navigation = useNavigation();
  return (
    <View style={classname.row_around}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('NewsStack')}>
        <Text>News</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Footer;
