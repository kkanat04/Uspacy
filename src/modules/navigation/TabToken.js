import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Footer from '../../components/Footer/Footer';
import HomeStack from './stackCustom/HomeStack';
import NewsStack from './stackCustom/NewsStack';

const MyTab = createBottomTabNavigator();

function TabToken() {
  return (
    <MyTab.Navigator
            // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={(props) => <Footer props={props} />}
    >
      <MyTab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <MyTab.Screen
        name="NewsStack"
        component={NewsStack}
        options={{ headerShown: false }}
      />
    </MyTab.Navigator>

  );
}

export default TabToken;
