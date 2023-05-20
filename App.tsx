import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigator';
import {useThemeStore} from './src/states';

const App = () => {
  const AppTheme = useThemeStore(state => state);
  return (
    <NavigationContainer theme={AppTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
