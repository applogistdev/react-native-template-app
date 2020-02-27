import React from 'react';
import {Image, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MenuStore from '../../utils/store/MenuStore';
import LanguageStore from '../../utils/store/LanguageStore';

/**
 * Sol menüdeki her bir sekme için özelleştirilmesini sağladığımız component.
 * @param props
 * @returns {*}
 * @constructor
 */
export const DrawerCustomComponent = ({...props}) => {
  const drawerCover = require('../../../assets/logo/logo.png');

  const logoutSystem = () => {
    MenuStore.setLogout();
    props.navigation.navigate('Home');
  };

  return (
    <DrawerContentScrollView>
      <Image source={drawerCover} style={styles.sideMenuIcon} />
      <DrawerItemList
        {...props}
        inactiveTintColor={EStyleSheet.value('$gColor')}
        activeTintColor={'#fff'}
        activeBackgroundColor={EStyleSheet.value('$gColor')}
        inactiveBackgroundColor={'#fff'}
        labelStyle={styles.label}
      />
      {MenuStore.isLogin && (
        <DrawerItem
          label={LanguageStore.resource.side_menu.logout.title}
          inactiveTintColor={EStyleSheet.value('$gColor')}
          activeTintColor={'#fff'}
          activeBackgroundColor={EStyleSheet.value('$gColor')}
          inactiveBackgroundColor={'#fff'}
          labelStyle={styles.label}
          onPress={() => logoutSystem()}
          icon={() => (
            <Icon color={'#ca566b'} size={25} name={'sign-out-alt'} />
          )}
        />
      )}
    </DrawerContentScrollView>
  );
};

const styles = EStyleSheet.create({
  label: {
    fontSize: 15,
    color: '#ca566b',
  },
  sideMenuIcon: {
    resizeMode: 'contain',
    width: 180,
    height: 80,
    marginVertical: 20,
  },
  text: {
    margin: 16,
    fontWeight: 'bold',
    color: 'red',
    fontSize: 16,
  },
});
