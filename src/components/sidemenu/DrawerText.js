import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

/**
 * Headerda yazacak olan alandır.
 * color : text'in rengi
 * title: başlıkta ne yazacağı
 */

export const DrawerText = ({ title = 'Title', color = EStyleSheet.value('$gColor')}) => {
  return (
    <View>
      <Text style={[styles.container, {color: color}]}> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
