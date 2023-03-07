import React, {useState} from 'react';
import {Platform, Switch} from 'react-native';
import {OS_PLATFORM} from '../constants';

interface ICustomSwitchProps {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, onChange}: ICustomSwitchProps) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: '#5856D6'}}
      thumbColor={Platform.OS === OS_PLATFORM.android ? '#5856D6' : ''}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
