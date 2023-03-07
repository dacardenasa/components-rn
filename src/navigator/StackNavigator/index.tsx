import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Alerts,
  Animation101,
  Animation102,
  CustomModal,
  CustomSectionList,
  Home,
  InfiniteScroll,
  Refresh,
  Slides,
  SwitchScreen,
  TextInputs,
  ThemeScreen,
} from '../../screens';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="animation-101" component={Animation101} />
      <Stack.Screen name="animation-102" component={Animation102} />
      <Stack.Screen name="switchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertsScreen" component={Alerts} />
      <Stack.Screen name="TextInputsScreen" component={TextInputs} />
      <Stack.Screen name="RefreshScreen" component={Refresh} />
      <Stack.Screen name="SectionListScreen" component={CustomSectionList} />
      <Stack.Screen name="ModalScreen" component={CustomModal} />
      <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScroll} />
      <Stack.Screen name="SlidesScreen" component={Slides} />
      <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
    </Stack.Navigator>
  );
};
