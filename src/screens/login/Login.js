import React from 'react';

import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Constants from '../../utils/constants/Constants';
import MenuStore from '../../utils/store/MenuStore';

export const Login = ({navigation, ...props}) => {
  const login = () => {
    Constants.USER_ACCESS_TOKEN = 'jwt_token';
    MenuStore.setLogin();
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Button style={styles.login} title="Login" onPress={() => login()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    width: 100,
  },
});
