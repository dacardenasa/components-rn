import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {CustomSwitch, HeaderContent} from '../components';
import {OS_PLATFORM} from '../constants';
import {useForm} from '../hooks';

export const TextInputs = () => {
  const {name, email, phone, isSubscribed, onChange, form} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === OS_PLATFORM.ios ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.textInputBox}>
          <HeaderContent title={'TextInputs'} />
          <View style={styles.separator} />
          <TextInput
            placeholder={'write your name'}
            autoCorrect={false}
            autoCapitalize={'words'}
            style={styles.textInput}
            onChangeText={(value: string) => onChange(value, 'name')}
            value={name}
          />
          <View style={styles.separator} />
          <TextInput
            placeholder={'write your email'}
            autoCorrect={false}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            style={styles.textInput}
            onChangeText={(value: string) => onChange(value, 'email')}
            value={email}
          />
          <View style={styles.separator} />
          <TextInput
            placeholder={'write your phone'}
            keyboardType={'number-pad'}
            style={styles.textInput}
            onChangeText={(value: string) => onChange(value, 'phone')}
            value={phone}
          />
          <View style={styles.separator} />
          <View style={styles.switchBox}>
            <Text style={styles.switchBoxLabel}>Subscribe to newsletter</Text>
            <CustomSwitch
              isOn={isSubscribed}
              onChange={value => onChange(value, 'isSubscribed')}
            />
          </View>
          <HeaderContent title={JSON.stringify(form, null, 3)} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  textInputBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  separator: {
    height: 8,
  },
  textInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  switchBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchBoxLabel: {
    fontSize: 14,
  },
});
