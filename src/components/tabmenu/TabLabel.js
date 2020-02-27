import React, {Component, useEffect, useState} from 'react';
import {Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export const TabLabel = ({ title= "", ...props }) => {
  const [focused, setFocused] = useState(props.focused);

  // [] içerisindeki props.focused değiştiği zaman useEffect yeniden çalışacak demektir.
  useEffect(() => {
    setFocused(props.focused);
  }, [props.focused]);

  return (
    <Text style={[styles.text, (focused) ? {color:EStyleSheet.value('$gColor')} : { color: 'gray'}]}>
      {title}
    </Text>
  );
};

const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 11,
  }
});
