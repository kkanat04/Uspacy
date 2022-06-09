import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { classname } from './src/styles/styles';
import { store } from './src/modules/redux/store';
import Main from './src/components/Main/Main';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={classname.flex}>
        <Main />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
