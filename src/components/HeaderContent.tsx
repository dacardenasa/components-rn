import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useThemeStore} from '../states';

interface IHeaderContentProps {
  title: string;
}

export const HeaderContent = ({title}: IHeaderContentProps) => {
  const {colors} = useThemeStore(state => state);
  const {top} = useSafeAreaInsets();
  return (
    <View style={{...styles.container, marginTop: top + 20}}>
      <Text style={{...styles.title, color: colors.text}}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
  },
});
