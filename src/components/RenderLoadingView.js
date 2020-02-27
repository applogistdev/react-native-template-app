import React from 'react';
import {View, StyleSheet, Image } from 'react-native';

/**
 *  loading işaretini çıkarır.
 * @returns {*}
 * @constructor
 */
const RenderLoadingView = () => {
  return (
    <View style={styles.spinnerContainer}>
      <Image
        style={styles.gif}
        source={require('../../assets/gif/loading.gif')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  gif: {
    width: 100,
    height: 100,
  },
});

export default RenderLoadingView;
