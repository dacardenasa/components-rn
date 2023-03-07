import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import {useAnimation} from '../hooks';

interface IAnimatedImageProps {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const AnimatedImage = ({uri, style}: IAnimatedImageProps) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const finishLoading = () => {
    fadeIn();
    setIsLoading(false);
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading ? (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color={'#5cc9f5'}
          size={30}
        />
      ) : null}
      <Animated.Image
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};
