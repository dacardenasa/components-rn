import {create} from 'zustand';
import {THEMES} from '../../constants';
import {ThemeType} from '../../interfaces/appInterfaces';
import {Theme} from '@react-navigation/native';

interface ThemeState extends Theme {
  currentTheme: ThemeType;
  backgroundColor: 'black' | 'white';
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

interface ThemeStyles extends Theme {
  currentTheme: ThemeType;
  backgroundColor: 'black' | 'white';
}

const LightTheme: ThemeStyles = {
  dark: false,
  backgroundColor: 'white',
  currentTheme: 'light',
  colors: {
    primary: 'black',
    background: '#ffffff',
    card: '#ffffff',
    text: 'black',
    border: 'black',
    notification: '#767a74',
  },
};

const DarkTheme: ThemeStyles = {
  dark: true,
  backgroundColor: 'black',
  currentTheme: 'dark',
  colors: {
    primary: '#FFFFFF',
    background: '#FFFFFF',
    card: '#FFFFFF',
    text: '#FFFFFF',
    border: '#FFFFFF',
    notification: 'rgb(255, 69, 58)',
  },
};

export const useThemeStore = create<ThemeState>()(set => ({
  dark: false,
  backgroundColor: 'white',
  currentTheme: THEMES.LIGHT as ThemeType,
  colors: LightTheme.colors,
  setDarkTheme: () =>
    set(state => ({
      ...state,
      dark: true,
      backgroundColor: 'black',
      currentTheme: THEMES.DARK as ThemeType,
      colors: {...DarkTheme.colors},
    })),
  setLightTheme: () =>
    set(state => ({
      ...state,
      dark: false,
      backgroundColor: 'white',
      currentTheme: THEMES.LIGHT as ThemeType,
      colors: {...LightTheme.colors},
    })),
}));
