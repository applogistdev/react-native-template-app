import React, { useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text} from 'react-native';

/**
 * Sol menude Drawer için text componentidir.
 * @param iconName
 * @param props
 * @returns {*}
 * @constructor
 */
export const DrawerLabel = ({...props}) => {
  const [title, setTitle] = useState(props.title);
  const [focused, setFocused] = useState(props.focused);

  useEffect(() => {
    setFocused(props.focused);
  }, [props.focused]);

  return (
    <Text
      style={[
        styles.text,
        focused ? {color: '#fff'} : {color: EStyleSheet.value('$gColor')},
      ]}>
      {' '}
      {title}{' '}
    </Text>
  );
};

const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
  },
});
