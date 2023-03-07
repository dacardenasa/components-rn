import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {HeaderContent} from '../components';
import {THEMES} from '../constants';
import {useThemeStore} from '../states';

export const ThemeScreen = () => {
  const {currentTheme, theme, setDarkTheme, setLightTheme} = useThemeStore(
    state => state,
  );
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.backgroundColor,
      }}>
      <View style={styles.box}>
        <HeaderContent title={'Change Theme'} />
        <TouchableOpacity
          activeOpacity={0.8}
          style={theme.buttonPrimary}
          onPress={currentTheme === THEMES.DARK ? setLightTheme : setDarkTheme}>
          <Text style={theme.title}>Light / Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  box: {
    width: '100%',
    paddingHorizontal: 16,
  },
});
