import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {HeaderContent} from '../components';
import {styles} from '../theme/appTheme';
import {useThemeStore} from '../states';

export const CustomModal = () => {
  const {backgroundColor} = useThemeStore(state => state);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <View style={{...styles.container, backgroundColor}}>
      <HeaderContent title={'Custom Modal'} />
      <Button title={'Open modal'} onPress={() => setIsVisible(true)} />
      <Modal visible={isVisible} animationType={'fade'} transparent>
        <View style={modalStyles.backgroundBox}>
          <View style={modalStyles.contentBox}>
            <Text style={modalStyles.title}>Modal</Text>
            <Text style={modalStyles.subTitle}>Modal Body</Text>
            <View style={modalStyles.separator} />
            <Button title={'Close modal'} onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const modalStyles = StyleSheet.create({
  backgroundBox: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentBox: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
  },
  separator: {
    height: 16,
  },
});
