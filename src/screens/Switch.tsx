import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomSwitch, HeaderContent} from '../components';
import {useThemeStore} from '../states';

interface ISwitchStates {
  isActive: boolean;
  isHungry: boolean;
  isHappy: boolean;
}

export const SwitchScreen = () => {
  const [switchesState, setSwitchesState] = useState<ISwitchStates>({
    isActive: false,
    isHungry: false,
    isHappy: false,
  });
  const {backgroundColor, colors} = useThemeStore(state => state);

  const {isActive, isHungry, isHappy} = switchesState;

  const toggleSwitch = (value: boolean, field: string) => {
    setSwitchesState(c => ({...c, [field]: value}));
  };

  return (
    <View style={{...styles.container, backgroundColor}}>
      <HeaderContent title={'Switches'} />
      <View style={styles.switchBox}>
        <Text style={{...styles.switchBoxLabel, color: colors.text}}>
          isActive
        </Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => toggleSwitch(value, 'isActive')}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.switchBox}>
        <Text style={{...styles.switchBoxLabel, color: colors.text}}>
          isHungry
        </Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => toggleSwitch(value, 'isHungry')}
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.switchBox}>
        <Text style={{...styles.switchBoxLabel, color: colors.text}}>
          isHappy
        </Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => toggleSwitch(value, 'isHappy')}
        />
      </View>
      <Text style={{...styles.switchBoxLabel, color: colors.text}}>
        {JSON.stringify(switchesState, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
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
  separator: {
    height: 8,
  },
});
