import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigator';
import {useThemeStore} from './src/states';
import {View} from 'react-native';

const App = () => {
  const AppTheme = useThemeStore(state => state);
  return (
    <View style={{backgroundColor: AppTheme.backgroundColor, flex: 1}}>
      <NavigationContainer theme={AppTheme}>
        <StackNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;
