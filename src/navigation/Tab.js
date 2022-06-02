import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Footer from '../components/Footer/Footer';
import HomeStack from './stackCustom/HomeStack';
import NewsStack from './stackCustom/NewsStack';
import AuthStack from "./stackCustom/AuthStack";

const MyTab = createBottomTabNavigator();

const Tab = () => {
  return (
    <MyTab.Navigator tabBar={props => <Footer {...props} />}>
      <MyTab.Screen
        name={"AuthStack"}
        component={AuthStack}
        options={{headerShown: false}}
      />
      <MyTab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <MyTab.Screen
        name="NewsStack"
        component={NewsStack}
        options={{headerShown: false}}
      />
    </MyTab.Navigator>
  );
};

export default Tab;
