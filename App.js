import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import Constants from './src/config/Constants';
import MainNavigator from './src/navigator/MainNavigator';
import RootComponent from './src/components/RootComponent'

const App: () => Node = () => {

  return (
    <RootComponent>
      <MainNavigator />
    </RootComponent>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: Constants.COLOR_WHITE,
    flex: 1
  },
});

export default App;
