import React from 'react';
import {View} from 'react-native';
import {useThemeStore} from '../states';

export const FlatListSeparator = () => {
  const {colors} = useThemeStore(state => state);
  return (
    <View
      style={{
        borderBottomWidth: 1,
        opacity: 0.4,
        marginVertical: 5,
        borderColor: colors.border,
      }}
    />
  );
};
