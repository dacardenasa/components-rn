import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {HeaderContent} from '../components';
import {useAnimation} from '../hooks';
import {useThemeStore} from '../states';

export const Animation102 = () => {
  const {dragable, dragableResponder} = useAnimation();
  const {backgroundColor} = useThemeStore(state => state);
  return (
    <View style={{...styles.container, backgroundColor}}>
      <HeaderContent title={'Animation102'} />
      <Animated.View
        {...dragableResponder.panHandlers}
        style={[dragable.getLayout(), styles.greenLightBox]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenLightBox: {
    width: 150,
    height: 150,
    backgroundColor: '#b0f566',
    borderRadius: 8,
  },
});
