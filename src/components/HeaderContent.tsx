import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useThemeStore} from '../states';

interface IHeaderContentProps {
  title: string;
}

export const HeaderContent = ({title}: IHeaderContentProps) => {
  const {theme} = useThemeStore(state => state);
  const {top} = useSafeAreaInsets();
  return (
    <View style={{marginTop: top + 20, marginBottom: 20}}>
      <Text style={theme.title}>{title}</Text>
    </View>
  );
};
