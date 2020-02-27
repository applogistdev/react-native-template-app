import React, {useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View} from 'react-native';
import {Button} from "react-native-elements";

import LanguageStore from "../../utils/store/LanguageStore";
import RenderLoadingView from "../../components/RenderLoadingView";

const Corporate = ({}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [buttonTitle, setButtonTitle] = useState(LanguageStore.resource.side_menu.home.button_call);

  //when buttonFile variable is changed, the useEffect function executes again
  useEffect(() => {
    alert("useEffect run")
  }, [buttonTitle]);

  const getLoading = async () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
      setButtonTitle("Changed")
    }, 1000);
  };

  const renderData = () => {
    return (
      <View style={styles.container}>
        <Button style={styles.home} title={buttonTitle} onPress={() => getLoading()} />
      </View>
    );
  };

  if (!isVisible) {
    return <RenderLoadingView />;
  } else {
    return renderData();
  }
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  home: {
    width: 100,
  },
});

export default Corporate;
