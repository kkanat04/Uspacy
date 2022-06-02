import React from 'react';
import {SafeAreaView} from 'react-native';
import Tab from './src/navigation/Tab';
import {NavigationContainer} from '@react-navigation/native';
import {classname} from './src/styles/styles';

const App = () => {

  return (
    // <Provider store={store}>
    <SafeAreaView style={classname.flex}>
      <NavigationContainer>
        <Tab />
      </NavigationContainer>
    </SafeAreaView>
    // </Provider>
  );
};

export default App;
