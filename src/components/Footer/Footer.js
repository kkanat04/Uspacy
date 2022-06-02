import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { classname } from "../../styles/styles";

const Footer = ({navigation}) => {
  return (
    <View style={classname.row_around}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('NewsStack')}>
        <Text>News</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AuthStack')}>
        <Text>Auth</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
