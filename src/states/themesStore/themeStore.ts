import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {create} from 'zustand';
import {THEMES} from '../../constants';
import {ThemeType} from '../../interfaces/appInterfaces';

interface IThemeProps {
  backgroundColor: string;
  title: StyleProp<TextStyle>;
  subTitle: StyleProp<TextStyle>;
  buttonPrimary: StyleProp<ViewStyle>;
}

interface ThemeState {
  currentTheme: ThemeType;
  theme: IThemeProps;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

const LightTheme: IThemeProps = {
  backgroundColor: '#ffffff',
  title: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#000000',
    fontSize: 16,
  },
  buttonPrimary: {
    width: 150,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
  },
};

const DarkTheme: IThemeProps = {
  backgroundColor: '#000000',
  title: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#ffffff',
    fontSize: 16,
  },
  buttonPrimary: {
    width: 150,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
};

export const useThemeStore = create<ThemeState>()(set => ({
  currentTheme: THEMES.LIGHT as ThemeType,
  theme: LightTheme,
  setDarkTheme: () =>
    set(state => ({
      ...state,
      currentTheme: THEMES.DARK as ThemeType,
      theme: {...DarkTheme},
    })),
  setLightTheme: () =>
    set(state => ({
      ...state,
      currentTheme: THEMES.LIGHT as ThemeType,
      theme: {...LightTheme},
    })),
}));
