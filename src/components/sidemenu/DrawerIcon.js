import React, {Component, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EStyleSheet from 'react-native-extended-stylesheet';

/**
 * Sol menude Drawer için icon componentidir.
 * @param iconName
 * @param props
 * @returns {*}
 * @constructor
 */
export const DrawerIcon = ({iconName = '', ...props}) => {
  const [size, setSize] = useState(props.size);
  const [icon, setIcon] = useState(iconName);
  const [focused, setFocused] = useState(props.focused);

  useEffect(() => {
    setFocused(props.focused);
  }, [props.focused]);

  return (
    <Icon
      name={icon}
      size={size}
      color={focused ? 'white' : EStyleSheet.value('$gColor')}
    />
  );
};

const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
