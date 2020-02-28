import React, {useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text, View} from 'react-native';
import LanguageStore from '../utils/store/LanguageStore';

const Home = ({}) => {
  const [message, setMessage] = useState(
    LanguageStore.resource.side_menu.home.title,
  );

  useEffect(() => {
    //
  }, []);

  const render = () => {
    return (
      <View style={styles.container}>
        <Text> {message} </Text>
      </View>
    );
  };

  return render();
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
