import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EStyleSheet from 'react-native-extended-stylesheet';

//Solmenünün açılması için hamburger iconunun bulunduğu component.
export const DrawerBar = ({...props}) => {
  const toggleMenu = () => {
    props.navigation.toggleDrawer();
  };
  return (
    <TouchableOpacity onPress={() => toggleMenu()} style={styles.container}>
      <Icon name="bars" size={25} color={EStyleSheet.value('$gColor')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 1,
    marginLeft: 10,
  },
});
