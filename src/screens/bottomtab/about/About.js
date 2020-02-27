import React, {useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text, View} from 'react-native';
import RenderLoadingView from '../../../components/RenderLoadingView';
import LanguageStore from "../../../utils/store/LanguageStore";

const About = ({}) => {

  const render = () => {
    return (
      <View style={styles.container}>
        <Text> {LanguageStore.resource.bottom_tab_menu.about.applogist} </Text>
      </View>
    );
  };

  return render();
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default About;
