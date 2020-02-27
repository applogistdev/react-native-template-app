import React, { useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View} from 'react-native';

export const TabIcon = ({iconName = 'info', ...props}) => {
  const [size, setSize] = useState(props.size);
  const [icon, setIcon] = useState(iconName);
  const [focused, setFocused] = useState(props.focused);

  useEffect(() => {
    setFocused(props.focused);
  }, [props.focused]);

  return (
    <View style={styles.container}>
      <Icon
        name={icon}
        size={size}
        color={focused ? EStyleSheet.value('$gColor') : 'gray'}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
