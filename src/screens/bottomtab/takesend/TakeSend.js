import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import RenderLoadingView from '../../../components/RenderLoadingView';
import {Button} from 'react-native-elements';

export const TakeSend = ({ navigation, route }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState('Mesaj');

  useEffect(() => {
    //
  }, []);

  const navigateToList = async () => {
    navigation.navigate('TakeSendList');
  };

  const renderForm = () => {
    return (
      <View style={styles.container}>
        <Button
          style={styles.button}
          buttonStyle={styles.success}
          title="Navigate List"
          onPress={() => navigateToList()}
        />
      </View>
    );
  };

  if (!isVisible) {
    return <RenderLoadingView />;
  } else {
    return renderForm();
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
