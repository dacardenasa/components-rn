import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {HeaderContent} from '../components';
import {THEMES} from '../constants';
import {useThemeStore} from '../states';

export const ThemeScreen = () => {
  const {currentTheme, colors, backgroundColor, setDarkTheme, setLightTheme} =
    useThemeStore(state => state);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor,
      }}>
      <View style={styles.box}>
        <HeaderContent title={'Change Theme'} />
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            ...styles.button,
            backgroundColor: colors.background,
            borderColor: colors.border,
          }}
          onPress={currentTheme === THEMES.DARK ? setLightTheme : setDarkTheme}>
          <Text
            style={{
              color: currentTheme === THEMES.DARK ? '#000000' : colors.text,
            }}>
            Light / Dark
          </Text>
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
  button: {
    width: '30%',
    height: 40,
    fontSize: 16,
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
