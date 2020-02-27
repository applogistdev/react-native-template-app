import React from "react";
import {AppRegistry, View, StyleSheet} from 'react-native';
import {name as appName} from './app.json';
import Router from "./src/Router";

//for EStyleSheet
import UtilStyle from './src/utils/styles/UtilStyle';

const App = () => (
  <View style={styles.container}>
    <Router />
  </View>
);

AppRegistry.registerComponent(appName, () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
