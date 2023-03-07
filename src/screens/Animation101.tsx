import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {HeaderContent} from '../components';
import {useAnimation} from '../hooks';

export const Animation101 = () => {
  const {opacity, position, fadeIn, fadeOut, startMovingPosition} =
    useAnimation();
  return (
    <View style={styles.container}>
      <HeaderContent title={'Animation101'} />
      <Animated.View
        style={{
          ...styles.blueLightBox,
          opacity,
          transform: [{translateX: position}],
        }}
      />
      <View style={styles.separatorBox} />
      <Button
        title={'fadeIn'}
        onPress={() => {
          fadeIn();
          startMovingPosition(100, 500);
        }}
      />
      <View style={styles.separatorBox} />
      <Button title={'fadeOut'} onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueLightBox: {
    width: 150,
    height: 150,
    backgroundColor: '#5cc9f5',
  },
  separatorBox: {
    height: 20,
  },
});
