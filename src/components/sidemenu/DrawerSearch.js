import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EStyleSheet from 'react-native-extended-stylesheet';

export const DrawerSearch = ({}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="search" size={25} color={EStyleSheet.value('$gColor')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
