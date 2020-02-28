import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import RenderLoadingView from '../../../components/RenderLoadingView';

export const TakeSendList = ({}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [message, setMessage] = useState('List');

  useEffect(() => {
    //
  }, []);

  const renderData = () => {
    return (
      <View style={styles.container}>
        <Text> {message} </Text>
      </View>
    );
  };

  if (!isVisible) {
    return <RenderLoadingView />;
  } else {
    return renderData();
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
