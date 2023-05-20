import React from 'react';
import {Alert, Button, Platform, StyleSheet, View} from 'react-native';
import {HeaderContent} from '../components';
import {OS_PLATFORM} from '../constants';
import {useThemeStore} from '../states';

export const Alerts = () => {
  const {backgroundColor} = useThemeStore(state => state);
  const toggleAlert = () => {
    Alert.alert(
      'Alert',
      'This is the body of alert',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        cancelable: true,
      },
    );
  };
  const togglePrompt = () => {
    Alert.prompt(
      'Are you sure?',
      'this action canot rollback',
      (value: string) => console.info('Data: ', value),
      'plain-text',
      '1083873773',
      'number-pad',
    );
  };
  return (
    <View style={{...styles.container, backgroundColor}}>
      <HeaderContent title={'Alerts'} />
      <View style={styles.separator} />
      <Button title={'alert'} onPress={toggleAlert} />
      {Platform.OS === OS_PLATFORM.ios ? (
        <>
          <View style={styles.separator} />
          <Button title={'Show Prompt'} onPress={togglePrompt} />
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 8,
  },
});
