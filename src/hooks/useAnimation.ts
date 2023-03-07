import {useRef} from 'react';
import {Animated, Easing, PanResponder} from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(-100)).current;
  const dragable = useRef(new Animated.ValueXY()).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      position.setValue(-100);
    });
  };

  const startMovingPosition = (
    initialPosition: number,
    duration: number = 300,
  ) => {
    position.setValue(initialPosition);
    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      // easing: Easing.bounce,
    }).start();
  };

  const dragableResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: dragable.x,
          dy: dragable.y,
        },
      ],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: () => {
      Animated.spring(dragable, {
        toValue: {x: 0, y: 0},
        useNativeDriver: false,
      }).start();
    },
  });

  return {
    opacity,
    position,
    dragable,
    dragableResponder,
    fadeIn,
    fadeOut,
    startMovingPosition,
  };
};
